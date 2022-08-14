from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, InputRequired, Length
from .createspot_form import price_positive

class EditSpotForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(message='Name is required.'), Length(max=150, message='Name must be 150 characters or less.')])
    price = IntegerField('price', validators=[InputRequired(message='Price must be an integer.'), price_positive])
    description = StringField('description', validators=[DataRequired(message='Description is required.'), Length(max=1000, message='Description must be 1000 characters or less.')])
