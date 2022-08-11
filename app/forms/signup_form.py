from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, EqualTo, ValidationError, Length
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
    username = StringField('username', validators=[DataRequired(message='Username is required.'), username_exists, Length(max=40, message='Username must be 40 characters or less')])
    name = StringField('name', validators=[DataRequired(message='Name is required.'), Length(max=100, message='Name must be 100 characters or less')])
    email = StringField('email', validators=[DataRequired(message='Email is required.'), user_exists, Email(), Length(max=40, message='Email must be 40 characters or less')])
    password = StringField('password', validators=[DataRequired(message='Password is required.')])
    repeatPassword = StringField('confirm password', validators=[DataRequired(message='Repeat password is required.'), EqualTo('password','Passwords do not match.')])
