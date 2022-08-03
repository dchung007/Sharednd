from app.models import db, Booking


def seed_bookings():

    booking1 = Booking(
      userId=4,
      spotId=1,
      startDate='',
      endDate='',
      price=74265,
      description=''
    )
    booking2 = Booking(
      userId=2,
      spotId=1,
      startDate='',
      endDate='',
      price=13849,
      description=''
    )
    booking3 = Booking(
      userId=5,
      spotId=1,
      startDate='',
      endDate='',
      price=48935,
      description=''
    )
    booking4 = Booking(
      userId=6,
      spotId=1,
      startDate='',
      endDate='',
      price=34658,
      description=''
    )
    booking5 = Booking(
      userId=3,
      spotId=1,
      startDate='',
      endDate='',
      price=24843,
      description=''
    )
    booking6 = Booking(
      userId=4,
      spotId=3,
      startDate='',
      endDate='',
      price=34785,
      description=''
    )
    booking7 = Booking(
      userId=1,
      spotId=2,
      startDate='',
      endDate='',
      price=84978,
      description=''
    )
    booking8 = Booking(
      userId=5,
      spotId=2,
      startDate='',
      endDate='',
      price=98743,
      description=''
    )
    booking9 = Booking(
      userId=4,
      spotId=2,
      startDate='',
      endDate='',
      price=59287,
      description=''
    )
    booking10 = Booking(
      userId=6,
      spotId=2,
      startDate='',
      endDate='',
      price=67854,
      description=''
    )
    booking11 = Booking(
      userId=6,
      spotId=3,
      startDate='',
      endDate='',
      price=73462,
      description=''
    )
    booking12 = Booking(
      userId=2,
      spotId=3,
      startDate='',
      endDate='',
      price=87495,
      description=''
    )
    booking13 = Booking(
      userId=5,
      spotId=3,
      startDate='',
      endDate='',
      price=72346,
      description=''
    )
    booking14 = Booking(
      userId=4,
      spotId=3,
      startDate='',
      endDate='',
      price=93744,
      description=''
    )
    booking15 = Booking(
      userId=1,
      spotId=3,
      startDate='',
      endDate='',
      price=73643,
      description=''
    )
    # booking16 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=34896,
    #   description=''
    # )
    # booking17 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=4832,
    #   description=''
    # )
    # booking18 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=34833,
    #   description=''
    # )
    # booking19 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=12233,
    #   description=''
    # )
    # booking20 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=92733,
    #   description=''
    # )
    # booking21 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=23322,
    #   description=''
    # )
    # booking22 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=12234,
    #   description=''
    # )
    # booking23 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=45321,
    #   description=''
    # )
    # booking24 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=42312,
    #   description=''
    # )
    # booking25 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=38796,
    #   description=''
    # )
    # booking26 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=44653,
    #   description=''
    # )
    # booking27 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=39876,
    #   description=''
    # )
    # booking28 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=26353,
    #   description=''
    # )
    # booking29 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=23233,
    #   description=''
    # )
    # booking30 = Booking(
    #   userId=1,
    #   spotId=1,
    #   startDate='',
    #   endDate='',
    #   price=97233,
    #   description=''
    # )



    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)
    db.session.add(booking4)
    db.session.add(booking5)
    db.session.add(booking6)
    db.session.add(booking7)
    db.session.add(booking8)
    db.session.add(booking9)
    db.session.add(booking10)
    db.session.add(booking11)
    db.session.add(booking12)
    db.session.add(booking13)
    db.session.add(booking14)
    db.session.add(booking15)
    # db.session.add(booking16)
    # db.session.add(booking17)
    # db.session.add(booking18)
    # db.session.add(booking19)
    # db.session.add(booking20)
    # db.session.add(booking21)
    # db.session.add(booking22)
    # db.session.add(booking23)
    # db.session.add(booking24)
    # db.session.add(booking25)
    # db.session.add(booking26)
    # db.session.add(booking27)
    # db.session.add(booking28)
    # db.session.add(booking29)
    # db.session.add(booking30)

    db.session.commit()



def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
    db.session.commit()
