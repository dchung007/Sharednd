from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, Length, ValidationError, InputRequired


# def check_price_num(form, field):
#     price = field.data
#     # if not isinstance(price, int):
#     if int(price):
#         raise ValidationError('Price must be an integer')

def price_positive(form, field):
    price = field.data
    if type(price) != int:
        raise ValidationError('Price must be an integer.')
    if price <= 0:
        raise ValidationError('Price must be positive.')




class CreateSpotForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(message='Name is required.'), Length(max=150, message='Name must be 150 characters or less.')])
    address = StringField('address', validators=[Length(max=250, message='Address must be 250 characters or less.')])
    city = StringField('city', validators=[DataRequired(message='City is required.'), Length(max=100, message='City must be 100 characters or less.')])
    state = StringField('state', validators=[Length(max=100, message='State must be 100 characters or less.')])
    country = StringField('country', validators=[DataRequired(message='Country is required.'), Length(max=100, message='Country must be 100 characters or less.')])
    price = IntegerField('price', validators=[InputRequired(message='Price is required.'), price_positive])
    description = StringField('description', validators=[DataRequired(message='Description is required.'), Length(max=1000, message='Description must be 1000 characters or less.')])
