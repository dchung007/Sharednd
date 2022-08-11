from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, Length, ValidationError, InputRequired


# def check_price_num(form, field):
#     price = field.data
#     if not isinstance(price, int):
#         raise ValidationError('Price must be an integer')


class CreateSpotForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(max=150, message='Spot name must be 150 characters or less')])
    address = StringField('address', validators=[Length(max=250, message='Address must be 250 characters or less')])
    city = StringField('city', validators=[DataRequired(), Length(max=100, message='Username must be 100 characters or less')])
    state = StringField('state', validators=[DataRequired(), Length(max=100, message='State must be 100 characters or less')])
    country = StringField('country', validators=[DataRequired(), Length(max=100, message='Country must be 100 characters or less')])
    price = IntegerField('price', validators=[InputRequired(message='Price must be an integer.')])
    description = StringField('description', validators=[DataRequired(), Length(max=1000, message='Description must be 1000 characters or less')])
