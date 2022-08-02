from .db import db
from sqlalchemy.sql import func
from sqlalchemy import DateTime

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    spotId = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    imageUrl = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(DateTime(timezone=True), server_default=func.now())

    spot_id = db.relationship("Spot", back_populates="spot_images")
