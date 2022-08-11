from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField
from wtforms.validators import DataRequired, InputRequired

class EditBookingForm(FlaskForm):
    startDate = DateField('startDate', validators=[DataRequired(message='StartDate is required.')])
    endDate = DateField('endDate', validators=[DataRequired(message='EndDate is required.')])
    price = IntegerField('price', validators=[InputRequired(message='Price is required.')])
