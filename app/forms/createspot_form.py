from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class CreateSpotForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    address = StringField('address')
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state')
    country = StringField('country', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
