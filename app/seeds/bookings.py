from app.models import db, Booking


def seed_bookings():

    booking1 = Booking(
      userId=4,
      spotId=1,
      startDate='2022-06-26',
      endDate='2022-06-30',
      price=1500,
    )
    booking2 = Booking(
      userId=2,
      spotId=1,
      startDate='2022-07-01',
      endDate='2022-07-04',
      price=1200,
    )
    booking3 = Booking(
      userId=5,
      spotId=1,
      startDate='2022-07-05',
      endDate='2022-07-12',
      price=2100,
    )
    booking4 = Booking(
      userId=6,
      spotId=1,
      startDate='2022-07-13',
      endDate='2022-07-19',
      price=1800,
    )
    booking5 = Booking(
      userId=3,
      spotId=1,
      startDate='2022-07-21',
      endDate='2022-07-29',
      price=2400,
    )
    booking6 = Booking(
      userId=4,
      spotId=2,
      startDate='2022-06-16',
      endDate='2022-06-30',
      price=642740,
    )
    booking7 = Booking(
      userId=1,
      spotId=2,
      startDate='2022-07-02',
      endDate='2022-07-11',
      price=413190,
    )
    booking8 = Booking(
      userId=5,
      spotId=2,
      startDate='2022-07-14',
      endDate='2022-07-19',
      price=229550,
    )
    booking9 = Booking(
      userId=4,
      spotId=2,
      startDate='2022-07-20',
      endDate='2022-07-23',
      price=137730,
    )
    booking10 = Booking(
      userId=6,
      spotId=2,
      startDate='2022-07-24',
      endDate='2022-07-28',
      price=183640,
    )
    booking11 = Booking(
      userId=6,
      spotId=3,
      startDate='2022-07-01',
      endDate='2022-07-07',
      price=57390,
    )
    booking12 = Booking(
      userId=2,
      spotId=3,
      startDate='2022-07-10',
      endDate='2022-07-15',
      price=47825,
    )
    booking13 = Booking(
      userId=5,
      spotId=3,
      startDate='2022-07-17',
      endDate='2022-07-23',
      price=57390,
    )
    booking14 = Booking(
      userId=4,
      spotId=3,
      startDate='2022-07-24',
      endDate='2022-07-26',
      price=19130,
    )
    booking15 = Booking(
      userId=1,
      spotId=3,
      startDate='2022-07-28',
      endDate='2022-07-31',
      price=28695,
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
