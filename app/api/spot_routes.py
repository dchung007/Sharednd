from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Spot
from app.forms.createspot_form import CreateSpotForm
from app.forms.editspot_form import EditSpotForm
from app.api.auth_routes import validation_errors_to_error_messages

spot_routes = Blueprint('spots', __name__)

@spot_routes.route('/all')
@login_required
def get_all_spots():
    spots = Spot.query.all()
    return {'spots': [spot.to_dict() for spot in spots]}

@spot_routes.route('/<int:spotId>')
@login_required
def get_one_spot(spotId):
    spot = Spot.query.get(spotId)
    return {'spot': spot.to_dict()}

@spot_routes.route('/new', methods=['POST'])
@login_required
def create_spot():
    form = CreateSpotForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        spot = Spot(
            ownerId=current_user.id,
            name=form.data['name'],
            address=form.data['address'],
            city=form.data['city'],
            state=form.data['state'],
            country=form.data['country'],
            price=form.data['price'],
            description=form.data['description']
        )
        db.session.add(spot)
        db.session.commit()
        return spot.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)}, 401

@spot_routes.route('/<int:spotId>/edit', methods=['PUT'])
@login_required
def edit_spot(spotId):
    spot = Spot.query.get(spotId)

    form = EditSpotForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        spot.name = form.data['name']
        spot.price = form.data['price']
        spot.description = form.data['description']
        db.session.commit()
        return spot.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)}, 401


@spot_routes.route('/<int:spotId>/delete', methods=['DELETE'])
@login_required
def delete_spot(spotId):
    spot = Spot.query.get(spotId)
    db.session.delete(spot)
    db.session.commit()

    return f'{spotId}'
