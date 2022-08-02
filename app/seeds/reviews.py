from app.models import db, Review


def seed_reviews():

    review1 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review2 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=2,
    )
    review3 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=3,
    )
    review4 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=4,
    )
    review5 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=5,
    )
    review6 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review7 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review8 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review9 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review10 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review11 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review12 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review13 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review14 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review15 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review16 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review17 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review18 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review19 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review20 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review21 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review22 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review23 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review24 = Review(
      userId=1,
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review25 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review26 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review27 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review28 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review29 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review30 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )



    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)

    db.session.commit()



def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
