from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Review
from app.forms.createreview_form import CreateReviewForm
from app.forms.editreview_form import EditReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/spot/<int:spotId>/all')
@login_required
def get_review_bookings(spotId):
    bookings = Review.query.filter_by(spotId=spotId).all()
    return {'reviews': [review.to_dict() for review in reviews]}

@review_routes.route('/new', methods=['POST'])
@login_required
def create_review():
    form = CreateReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            userId=current_user.id,
            spotId=form.data['spotId'],
            rating=form.data['rating'],
            review=form.data['review']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)}, 401

@review_routes.route('/<int:reviewId>/edit', methods=['PUT'])
@login_required
def edit_review(reviewId):
    review = Review.query.get(reviewId)

    form = EditReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review.rating = form.data['rating']
        review.review = form.data['review']
        db.session.commit()
        return review.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:reviewId>/delete', methods=['DELETE'])
@login_required
def delete_review(reviewId):
    review = Review.query.get(reviewId)
    db.session.delete(review)
    db.session.commit()

    return f'{reviewId}'
