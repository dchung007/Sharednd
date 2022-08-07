from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Booking
from app.forms.createbooking_form import CreateBookingForm
from app.forms.editbooking_form import EditBookingForm
from app.api.auth_routes import validation_errors_to_error_messages

booking_routes = Blueprint('bookings', __name__)

@booking_routes.route('/spot/<int:spotId>/all')
@login_required
def get_spot_bookings(spotId):
    bookings = Booking.query.filter_by(spotId=spotId).all()
    return {'bookings': [booking.to_dict() for booking in bookings]}

@booking_routes.route('/user/<int:userId>/all')
@login_required
def get_user_bookings(userId):
    bookings = Booking.query.filter_by(userId=userId).all()
    return {'bookings': [booking.to_dict() for booking in bookings]}

@booking_routes.route('/new', methods=['POST'])
@login_required
def create_booking():
    form = CreateBookingForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking = Booking(
            userId=current_user.id,
            spotId=form.data['spotId'],
            startDate=form.data['startDate'],
            endDate=form.data['endDate'],
            price=form.data['price']
        )
        db.session.add(booking)
        db.session.commit()
        return booking.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)}, 401

@booking_routes.route('/<int:bookingId>/edit', methods=['PUT'])
@login_required
def edit_booking(bookingId):
    booking = Booking.query.get(bookingId)

    form = EditBookingForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking.startDate = form.data['startDate']
        booking.endDate = form.data['endDate']
        booking.price = form.data['price']
        db.session.commit()
        return booking.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)}, 401


@booking_routes.route('/<int:bookingId>/delete', methods=['DELETE'])
@login_required
def delete_booking(bookingId):
    booking = Booking.query.get(bookingId)
    db.session.delete(booking)
    db.session.commit()

    return f'{bookingId}'
