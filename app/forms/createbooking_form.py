from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField
from wtforms.validators import DataRequired, InputRequired

class CreateBookingForm(FlaskForm):
    spotId = IntegerField('spotId', validators=[DataRequired()])
    startDate = DateField('startDate', validators=[InputRequired(message='StartDate is required')])
    endDate = DateField('endDate', validators=[InputRequired(message='EndDate is required')])
    price = IntegerField('price', validators=[InputRequired(message='Price is required')])
