from app.models import db, Spot


def seed_spots():
    spot1 = Spot(
      ownerId=1,
      name='Balian Treehouse with beautiful pool',
      address='',
      city='Balian Beach',
      state='Bali',
      country='Indonesia',
      price=300,
      description='A tropical paradise that will immerse you in the beautiful forests of Bali, with the Balian beach only a few steps away.'
    )
    spot2 = Spot(
      ownerId=2,
      name='The King of Bel Air',
      address='924 Bel Air Rd',
      city='Los Angeles',
      state='California',
      country='United States',
      price=45910,
      description='An absolute unit of a house, it has got everything you can think of. You will never be bored here!'
    )
    spot3 = Spot(
      ownerId=3,
      name='The Jewel of the Aegean Sea',
      address='',
      city='Kalafati',
      state='',
      country='Greece',
      price=9565,
      description='Picturesque version of Greece- the beautiful beaches, amazing home filled with aesthetic architecture. A huge pool and crystal clear waters.'
    )
    spot4 = Spot(
      ownerId=4,
      name='Iconic Glass Mansion',
      address='',
      city='Osage Beach',
      state='Missouri',
      country='United States',
      price=1580,
      description='The iconic and luxurious Glass Mansion has awe-inspiring, expansive lake views for miles from almost every room. It is located directly in the heart of Lake of the Ozarks in Osage Beach.'
    )
    spot5 = Spot(
      ownerId=5,
      name='Invisible House Joshua Tree - Skyscraper with Pool',
      address='',
      city='Joshua Tree',
      state='California',
      country='United States',
      price=4390,
      description='Quite simply, Invisible House is the most spectacular house in Joshua Tree. As seen in design and lifestyle publications worldwide, this mirrored 22 story horizontal skyscraper virtually disappears into the vast desert landscape. The luxurious 100-foot indoor swimming pool contrasts with the High Desert surroundings. The 90 acre property has its own 4000ft mountain and shares half a mile border with the National Park.'
    )
    spot6 = Spot(
      ownerId=6,
      name='Casa Paradiso',
      address='',
      city='Austin',
      state='Texas',
      country='United States',
      price=3830,
      description='Mexican style gets a Texas twist at this bright but cozy home on Lake Austin. A palapa-covered swim-up bar sets the tone for outdoor spaces with a pool, fireplace, and a sun-splashed patio right next to the dock. Walls of windows frame lake views, and stone arches frame fireplaces in the living and family rooms. Drive 25 minutes to shopping, dining, and state capitol tours in downtown Austin.'
    )
    # spot7 = Spot(
    #   ownerId=1,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot8 = Spot(
    #   ownerId=2,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot9 = Spot(
    #   ownerId=3,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot10 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot11 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot12 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot13 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot14 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot15 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot16 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot17 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot18 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot19 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )
    # spot20 = Spot(
    #   ownerId=4,
    #   name='',
    #   address='',
    #   city='',
    #   state='',
    #   country='',
    #   price=1000,
    #   description=''
    # )

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.add(spot4)
    db.session.add(spot5)
    db.session.add(spot6)
    # db.session.add(spot7)
    # db.session.add(spot8)
    # db.session.add(spot9)
    # db.session.add(spot10)
    # db.session.add(spot11)
    # db.session.add(spot12)
    # db.session.add(spot13)
    # db.session.add(spot14)
    # db.session.add(spot15)
    # db.session.add(spot16)
    # db.session.add(spot17)
    # db.session.add(spot18)
    # db.session.add(spot19)
    # db.session.add(spot20)

    db.session.commit()


def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
