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
    review_spot = db.relationship("Spot", back_populates="spot_reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'spotId': self.spotId,
            'review': self.review,
            'rating': self.rating,
            'createdAt': self.createdAt
        }
