from .db import db
from sqlalchemy.sql import func
from sqlalchemy import DateTime, Date


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    spotId = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    startDate = db.Column(Date(), nullable=False)
    endDate = db.Column(Date(), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(DateTime(timezone=True), server_default=func.now())

    user_id = db.relationship("User", back_populates="user_bookings")
    booked_spot = db.relationship("Spot", back_populates="spot_bookings")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'spotId': self.spotId,
            'startDate': self.startDate,
            'endDate': self.endDate,
            'price': self.price,
            'createdAt': self.createdAt
        }
