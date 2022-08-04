from flask import Blueprint, request
from flask_login import login_required, current_user
from flask_wtf.csrf import validate_csrf
from ..models import db, Spot
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

spot_routes = Blueprint('spots', __name__)

@spot_routes.route('/all')
@login_required
def get_all_spots():
  spots = Spot.query.all()
  return {'spots': [spot.to_dict() for spot in spots]}



@spot_routes.route('/new')
@login_required
def create_spot():
  try:
      validate_csrf(request.cookies['csrf_token'])

      if "image" not in request.files:
          return {"errors": "Image required."}, 400

      image = request.files["image"]

      if not allowed_file(image.filename):
          return {"errors": "Invalid filetype: jpg, jpeg, png, pdf only."}, 400

      image.filename = get_unique_filename(image.filename)

      upload = upload_file_to_s3(image)

      if "url" not in upload:
      # if the dictionary doesn't have a url key
      # it means that there was an error when we tried to upload
      # so we send back that error message
          return upload, 400

      url = upload["url"]

      new_post = Post(ownerId=current_user.id, image=url, caption=request.form.get('caption'))
      db.session.add(new_post)
      db.session.commit()

      return new_post.to_dict()
  except:
      return {'errors': 'Invalid csrf token'}, 400
