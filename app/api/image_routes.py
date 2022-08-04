from flask import Blueprint, request
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages
from flask_wtf.csrf import validate_csrf
from ..models import db, Image
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint('images', __name__)


@image_routes.route('/new')
@login_required
def create_image():
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

        new_image = Image(spotId=request.form.get('spotId'), imageUrl=url)
        db.session.add(new_image)
        db.session.commit()

        return new_image.to_dict()
    except:
        return {'errors': 'Invalid csrf token'}, 400



# @image_routes.route('/<int:imageId>/edit', methods=['POST'])
# @login_required
# def edit_image(imageId):
#     try:
#         validate_csrf(request.cookies['csrf_token'])

#         if "image" not in request.files:
#             return {"errors": "Image Required."}, 400

#         image = request.files["image"]

#         if not allowed_file(image.filename):
#             return {"errors": "Invalid filetype, jpg, jpeg, png, pdf only."}, 400

#         image.filename = get_unique_filename(image.filename)

#         upload = upload_file_to_s3(image)

#         if "url" not in upload:
#             # if the dictionary doesn't have a url key
#             # it means that there was an error when we tried to upload
#             # so we send back that error message
#             return upload, 400

#         url = upload["url"]
#         # flask_login allows us to get the current user from the request

#         editedImage = Image.query.get(imageId)
#         editedImage.imageUrl=url
#         db.session.commit()

#         return editedImage.to_dict()
#     except:
#         return {'errors': 'Invalid csrf token'}, 400


@image_routes.route('/<int:imageId>/delete', methods=['DELETE'])
@login_required
def delete_image(imageId):
    image = Image.query.get(imageId)
    db.session.delete(image)
    db.session.commit()

    return f'{imageId}'
