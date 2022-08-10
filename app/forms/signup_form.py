from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, EqualTo, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

# def password_checker(form, field):
#     password = form.data['password']
#     repeatPassword = form.data['repeatPassword']
#     if (password != repeatPassword):
#         raise ValidationError('Passwords need to match.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists])
    name = StringField('name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists, Email()])
    password = StringField('password', validators=[DataRequired()])
    repeatPassword = StringField('confirm password', validators=[DataRequired(), EqualTo('password','Passwords do not match')])
