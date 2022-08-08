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
    spot7 = Spot(
      ownerId=1,
      name='Malibu Mid-Century Modern Luxury retreat home',
      address='',
      city='Malibu',
      state='California',
      country='United States',
      price=1680,
      description='Relax in a luxurious 3-story Malibu getaway with spectacular ocean & mountain views. Our newly-built mid-century modern 4 bedroom, 3.5 bath home is nestled in the peaceful Santa Monica mountains just minutes from Southern California\'s most famous beaches. Enjoy a stylish space and wall to wall open views to the ocean. Every bedroom has ocean views.'
    )
    spot8 = Spot(
      ownerId=2,
      name='Luxe Boulder \'Barrett House\' on Mtn Peak w/Hot Tub',
      address='',
      city='Boulder',
      state='Colorado',
      country='United States',
      price=1275,
      description='There\'s no better place to experience Colorado than at \'Barrett House,\' a spectacular 3-bedroom, 3-bathroom vacation rental in beautiful Boulder! Nestled at an elevation of 7,000 feet on a scenic 3-acre mountain peak in the foothills, this stunning home borders Roosevelt National Forest, ensuring endless outdoor activities right outside the door. With a fireplace, theatre room, and unique decor, this lovely home promises a memorable getaway with your fellow outdoor-loving friends and family!'
    )
    spot9 = Spot(
      ownerId=3,
      name='The Most Private Island Resort in the World',
      address='',
      city='Belize City',
      state='',
      country='Belize',
      price=4570,
      description='A Private Island Resort Built for one to two couples - Everything is included. A swirl of turquoise and aquamarine lagoons cradle Gladden Private Island, an island fringed with white sand 20 miles northeast of Placencia, in the heart of Belize\'s Barrier Reef. This island jewel harbors your own private sanctuary, a casually elegant villa designed for just one - two couples, with the full service of a luxury resort.'
    )
    spot10 = Spot(
      ownerId=4,
      name='Beverly Hills Maison',
      address='',
      city='Beverly Hills',
      state='California',
      country='United States',
      price=3025,
      description='Private, gated French country chateau-inspired home sits at the end of a cul de sac on nearly 2 acres of land and is surrounded by stately trees, mature landscaping, and verdant canyon views. Beautifully living room with fireplace, formal dining room, large kitchen and light filled breakfast area. Spectacular canyon views from every room and nearby access to Beverly Hills, and the valley. Expansive back yard and pool area.'
    )
    spot11 = Spot(
      ownerId=4,
      name='Hoos Views',
      address='',
      city='Big Sky',
      state='Montana',
      country='United States',
      price=1390,
      description='Escape to the wilderness of the Spanish Peaks at this scenic ski lodge in Big Sky, Montana. Gaze upon the imposing views of Lone Peak from the comfort of a plush leather sofa. Let the Fan Mountian range inspire you while rejuvenating in the hot tub. And, warm up by the wood-burning fire after a day on the slopes. Later, drive 7 miles to Big Sky’s town center for a steak dinner at Horn and Cantle.'
    )
    spot12 = Spot(
      ownerId=4,
      name='New 6400 sqft Beach Mansion, Ocean Views',
      address='',
      city='Rockaway Beach',
      state='Oregon',
      country='United States',
      price=1360,
      description='Reserve now for your luxury year round gathering at IBB Beach Mansion, possibly the largest house available for rent on the Oregon Coast with incredible panoramic ocean views from every room and a 2500 sq ft deck. Gather with your large family at this newly remodeled house with new furniture, new mattresses, fully stocked kitchen and many updates. After a day at the beach, relax in the new hot tub on the deck, grill your fav meal or enjoy movie night in the theater room. 3 mins drive to beach.'
    )
    spot13 = Spot(
      ownerId=4,
      name='Abode at Dream Pointe | Hike Deer Valley Estate ',
      address='',
      city='Park City',
      state='Utah',
      country='United States',
      price=4520,
      description='Abode at Dream Pointe is a 14,000 square foot home that hosts multiple patios with gorgeous views of Jordanelle reservoir and the slopes of Deer Valley. This villa has state of the art home theater, game room, and 8 person hot tub with beautiful mountain views to enjoy after a long day on the slopes. Enjoy the outdoor fire pit -- perfect for après ski and a private heated 3 - car garage. Historic Main Street Park City is 3.0 miles away.'
    )
    spot14 = Spot(
      ownerId=4,
      name='',
      address='',
      city='',
      state='',
      country='',
      price=1000,
      description=''
    )
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
    db.session.add(spot7)
    db.session.add(spot8)
    db.session.add(spot9)
    db.session.add(spot10)
    db.session.add(spot11)
    db.session.add(spot12)
    db.session.add(spot13)
    db.session.add(spot14)
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
