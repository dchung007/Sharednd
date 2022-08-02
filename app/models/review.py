from .db import db
from sqlalchemy.sql import func
from sqlalchemy import DateTime

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    spotId = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    review = db.Column(db.String(1000), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(DateTime(timezone=True), server_default=func.now())

    review_owner = db.relationship("User", back_populates="user_reviews")
