from app.models import db, Review


def seed_reviews():

    review1 = Review(
      userId=1,
      spotId=1,
      review='So beautiful! The hosts were so kind and the pool was amazing. The nature around us was breathtaking!',
      rating=5,
    )
    review2 = Review(
      userId=2,
      spotId=1,
      review='Not one to really come back, but this place was really THAT memorable!',
      rating=5,
    )
    review3 = Review(
      userId=4,
      spotId=1,
      review='The nature was great, but the actual house itself was not actually that great.',
      rating=3,
    )
    review4 = Review(
      userId=6,
      spotId=1,
      review='So many mosquitoes! I did not enjoy this stay at all!',
      rating=1,
    )
    review5 = Review(
      userId=5,
      spotId=1,
      review='The pool was so refreshing, and walking through the trees and relaxing was well worth it.',
      rating=4,
    )
    review6 = Review(
      userId=3,
      spotId=2,
      review='My mind was blown when we arrived on the property. It was truly a dream vacation.',
      rating=5,
    )
    review7 = Review(
      userId=1,
      spotId=2,
      review='Absolutely incredible. Would come here again if I could afford it, haha!',
      rating=5,
    )
    review8 = Review(
      userId=5,
      spotId=2,
      review='A once in a lifetime vacation home, there was so much to do and not enough time to do it.',
      rating=5,
    )
    review9 = Review(
      userId=2,
      spotId=2,
      review='I mean the pictures do not do the place justice. The hosts were AMAZING and let us use every part of the house. It was SO MUCH fun!',
      rating=5,
    )
    review10 = Review(
      userId=4,
      spotId=2,
      review='The place was so big and peaceful. It was so nice to just lay by the pool and soak in the good views.',
      rating=5,
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
    review31 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review32 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review33 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review34 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review35 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review36 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review37 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review38 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review39 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review40 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review41 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review42 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review43 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review44 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review45 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review46 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review47 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review48 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review49 = Review(
      userId=1,
      spotId=1,
      review='',
      rating=1,
    )
    review50 = Review(
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
    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)
    db.session.add(review36)
    db.session.add(review37)
    db.session.add(review38)
    db.session.add(review39)
    db.session.add(review40)
    db.session.add(review41)
    db.session.add(review42)
    db.session.add(review43)
    db.session.add(review44)
    db.session.add(review45)
    db.session.add(review46)
    db.session.add(review47)
    db.session.add(review48)
    db.session.add(review49)
    db.session.add(review50)

    db.session.commit()



def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
