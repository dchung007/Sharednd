from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, InputRequired

class EditReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[InputRequired(message='Rating is required.')])
    review = StringField('review', validators=[InputRequired(message='Review is required.'), Length(max=1000, message='Review must be 1000 characters or less.')])
