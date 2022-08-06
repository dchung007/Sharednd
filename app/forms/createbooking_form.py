from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField
from wtforms.validators import DataRequired

class CreateBookingForm(FlaskForm):
    spotId = IntegerField('spotId', validators=[DataRequired()])
    startDate = DateField('startDate', validators=[DataRequired()])
    endDate = DateField('endDate', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
