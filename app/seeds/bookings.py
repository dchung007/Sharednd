from app.models import db, Booking


def seed_bookings():

    booking1 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking2 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking3 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking4 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking5 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking6 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking7 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking8 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking9 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking10 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking11 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking12 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking13 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking14 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking15 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking16 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking17 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking18 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking19 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking20 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking21 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking22 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking23 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking24 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking25 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking26 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking27 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking28 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking29 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )
    booking30 = Booking(
      userId=1,
      spotId=1,
      startDate='',
      endDate='',
      price=1000,
      description=''
    )



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
    db.session.add(booking16)
    db.session.add(booking17)
    db.session.add(booking18)
    db.session.add(booking19)
    db.session.add(booking20)
    db.session.add(booking21)
    db.session.add(booking22)
    db.session.add(booking23)
    db.session.add(booking24)
    db.session.add(booking25)
    db.session.add(booking26)
    db.session.add(booking27)
    db.session.add(booking28)
    db.session.add(booking29)
    db.session.add(booking30)

    db.session.commit()



def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
    db.session.commit()
