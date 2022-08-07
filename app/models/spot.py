from .db import db
from sqlalchemy.sql import func
from sqlalchemy import DateTime

class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(150), nullable=False)
    address = db.Column(db.String(250))
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100))
    country = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    createdAt = db.Column(DateTime(timezone=True), server_default=func.now())

    owner = db.relationship("User", back_populates="owner_spots")
    spot_bookings = db.relationship("Booking", back_populates="booked_spot", cascade="all, delete")
    spot_images = db.relationship("Image", back_populates="spot_id", cascade="all, delete")
    spot_reviews = db.relationship("Review", back_populates="review_spot", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.ownerId,
            'name':self.name,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'price': self.price,
            'description': self.description,
            'createdAt': self.createdAt,
            'images': [image.to_dict() for image in self.spot_images],
            'reviews': [review.to_dict() for review in self.spot_reviews]
        }
