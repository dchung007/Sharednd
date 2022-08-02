from .db import db
from sqlalchemy.sql import func
from sqlalchemy import DateTime


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    spotId = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    startDate = db.Column(DateTime(timezone=True), nullable=False)
    endDate = db.Column(DateTime(timezone=True), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(250), nullable=False)
    createdAt = db.Column(DateTime(timezone=True), server_default=func.now())

    user_id = db.relationship("User", back_populates="user_bookings")
    booked_spot = db.relationship("Spot", back_populates="spot_bookings")
