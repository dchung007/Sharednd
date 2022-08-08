from app.models import db, Image


def seed_images():

    image1 = Image(
      spotId=1,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image01-bali.png'
    )
    image2 = Image(
      spotId=1,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image02-bali.png'
    )
    image3 = Image(
      spotId=1,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image03-bali.png'
    )
    image4 = Image(
      spotId=1,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image04-bali.png'
    )
    image5 = Image(
      spotId=1,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image05-bali.png'
    )
    image6 = Image(
      spotId=2,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image06-BelAir.png'
    )
    image7 = Image(
      spotId=2,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image07-BelAir.png'
    )
    image8 = Image(
      spotId=2,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image08-BelAir.png'
    )
    image9 = Image(
      spotId=2,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image09-BelAir.png'
    )
    image10 = Image(
      spotId=2,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image10-BelAir.png'
    )
    image11 = Image(
      spotId=3,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image11-Greece.jpg'
    )
    image12 = Image(
      spotId=3,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image12-Greece.png'
    )
    image13 = Image(
      spotId=3,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image13-Greece.png'
    )
    image14 = Image(
      spotId=3,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image14-Greece.png'
    )
    image15 = Image(
      spotId=3,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image15-Greece.png'
    )
    image16 = Image(
      spotId=4,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image16-Missouri.png'
    )
    image17 = Image(
      spotId=4,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image17-Missouri.png'
    )
    image18 = Image(
      spotId=4,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image18-Missouri.png'
    )
    image19 = Image(
      spotId=4,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image19-Missouri.png'
    )
    image20 = Image(
      spotId=4,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image20-Missouri.png'
    )
    image21 = Image(
      spotId=5,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image21-JoshuaTree.png'
    )
    image22 = Image(
      spotId=5,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image22-JoshuaTree.png'
    )
    image23 = Image(
      spotId=5,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image23-JoshuaTree.png'
    )
    image24 = Image(
      spotId=5,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image24-JoshuaTree.png'
    )
    image25 = Image(
      spotId=5,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image25-JoshuaTree.png'
    )
    image26 = Image(
      spotId=6,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image26-AustinTexas.png'
    )
    image27 = Image(
      spotId=6,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image27-AustinTexas.png'
    )
    image28 = Image(
      spotId=6,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image28-AustinTexas.png'
    )
    image29 = Image(
      spotId=6,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image29-AustinTexas.png'
    )
    image30 = Image(
      spotId=6,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image30-AustinTexas.png'
    )
    image31 = Image(
      spotId=7,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image31-MalibuCalifornia.png'
    )
    image32 = Image(
      spotId=7,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image32-MalibuCalifornia.png'
    )
    image33 = Image(
      spotId=7,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image33-MalibuCalifornia.png'
    )
    image34 = Image(
      spotId=7,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image34-MalibuCalifornia.png'
    )
    image35 = Image(
      spotId=7,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image35-MalibuCalifornia.png'
    )
    image36 = Image(
      spotId=8,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image36-BoulderColorado.png'
    )
    image37 = Image(
      spotId=8,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image37-BoulderColorado.png'
    )
    image38 = Image(
      spotId=8,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image38-BoulderColorado.png'
    )
    image39 = Image(
      spotId=8,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image39-BoulderColorado.jpg'
    )
    image40 = Image(
      spotId=8,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image40-BoulderColorado.png'
    )
    image41 = Image(
      spotId=9,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image41-Belize.png'
    )
    image42 = Image(
      spotId=9,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image42-Belize.png'
    )
    image43 = Image(
      spotId=9,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image43-Belize.png'
    )
    image44 = Image(
      spotId=9,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image44-Belize.png'
    )
    image45 = Image(
      spotId=9,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image45-Belize.png'
    )
    image46 = Image(
      spotId=10,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image46-BeverlyHillsCalifornia.png'
    )
    image47 = Image(
      spotId=10,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image47-BeverlyHillsCalifornia.png'
    )
    image48 = Image(
      spotId=10,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image48-BeverlyHillsCalifornia.png'
    )
    image49 = Image(
      spotId=10,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image49-BeverlyHillsCalifornia.png'
    )
    image50 = Image(
      spotId=10,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image50-BeverlyHillsCalifornia.png'
    )
    image51 = Image(
      spotId=11,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image51-BigSkyMontana.png'
    )
    image52 = Image(
      spotId=11,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image52-BigSkyMontana.png'
    )
    image53 = Image(
      spotId=11,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image53-BigSkyMontana.png'
    )
    image54 = Image(
      spotId=11,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image54-BigSkyMontana.png'
    )
    image55 = Image(
      spotId=11,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image55-BigSkyMontana.png'
    )
    image56 = Image(
      spotId=12,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image56-RockawayBeachOregon.png'
    )
    image57 = Image(
      spotId=12,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image57-RockawayBeachOregon.png'
    )
    image58 = Image(
      spotId=12,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image58-RockawayBeachOregon.png'
    )
    image59 = Image(
      spotId=12,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image58-RockawayBeachOregon.png'
    )
    image60 = Image(
      spotId=12,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image60-RockawayBeachOregon.png'
    )
    image61 = Image(
      spotId=13,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image61-ParkCityUtah.png'
    )
    image62 = Image(
      spotId=13,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image62-ParkCityUtah.png'
    )
    image63 = Image(
      spotId=13,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image63-ParkCityUtah.png'
    )
    image64 = Image(
      spotId=13,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image64-ParkCityUtah.png'
    )
    image65 = Image(
      spotId=13,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image65-ParkCityUtah.png'
    )
    image66 = Image(
      spotId=14,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image66-ThonotosassaFlorida.png'
    )
    image67 = Image(
      spotId=14,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image67-ThonotosassaFlorida.png'
    )
    image68 = Image(
      spotId=14,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image68-ThonotosassaFlorida.png'
    )
    image69 = Image(
      spotId=14,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image69-ThonotosassaFlorida.png'
    )
    image70 = Image(
      spotId=14,
      imageUrl='https://sharedndbucket.s3.us-west-1.amazonaws.com/image70-ThonotosassaFlorida.png'
    )
    # image71 = Image(
    #   spotId=15,
    #   imageUrl=''
    # )
    # image72 = Image(
    #   spotId=15,
    #   imageUrl=''
    # )
    # image73 = Image(
    #   spotId=15,
    #   imageUrl=''
    # )
    # image74 = Image(
    #   spotId=15,
    #   imageUrl=''
    # )
    # image75 = Image(
    #   spotId=15,
    #   imageUrl=''
    # )
    # image76 = Image(
    #   spotId=16,
    #   imageUrl=''
    # )
    # image77 = Image(
    #   spotId=16,
    #   imageUrl=''
    # )
    # image78 = Image(
    #   spotId=16,
    #   imageUrl=''
    # )
    # image79 = Image(
    #   spotId=16,
    #   imageUrl=''
    # )
    # image80 = Image(
    #   spotId=16,
    #   imageUrl=''
    # )
    # image81 = Image(
    #   spotId=17,
    #   imageUrl=''
    # )
    # image82 = Image(
    #   spotId=17,
    #   imageUrl=''
    # )
    # image83 = Image(
    #   spotId=17,
    #   imageUrl=''
    # )
    # image84 = Image(
    #   spotId=17,
    #   imageUrl=''
    # )
    # image85 = Image(
    #   spotId=17,
    #   imageUrl=''
    # )
    # image86 = Image(
    #   spotId=18,
    #   imageUrl=''
    # )
    # image87 = Image(
    #   spotId=18,
    #   imageUrl=''
    # )
    # image88 = Image(
    #   spotId=18,
    #   imageUrl=''
    # )
    # image89 = Image(
    #   spotId=18,
    #   imageUrl=''
    # )
    # image90 = Image(
    #   spotId=18,
    #   imageUrl=''
    # )
    # image91 = Image(
    #   spotId=19,
    #   imageUrl=''
    # )
    # image92 = Image(
    #   spotId=19,
    #   imageUrl=''
    # )
    # image93 = Image(
    #   spotId=19,
    #   imageUrl=''
    # )
    # image94 = Image(
    #   spotId=19,
    #   imageUrl=''
    # )
    # image95 = Image(
    #   spotId=19,
    #   imageUrl=''
    # )
    # image96 = Image(
    #   spotId=20,
    #   imageUrl=''
    # )
    # image97 = Image(
    #   spotId=20,
    #   imageUrl=''
    # )
    # image98 = Image(
    #   spotId=20,
    #   imageUrl=''
    # )
    # image99 = Image(
    #   spotId=20,
    #   imageUrl=''
    # )
    # image100 = Image(
    #   spotId=20,
    #   imageUrl=''
    # )






    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image27)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)
    db.session.add(image33)
    db.session.add(image34)
    db.session.add(image35)
    db.session.add(image36)
    db.session.add(image37)
    db.session.add(image38)
    db.session.add(image39)
    db.session.add(image40)
    db.session.add(image41)
    db.session.add(image42)
    db.session.add(image43)
    db.session.add(image44)
    db.session.add(image45)
    db.session.add(image46)
    db.session.add(image47)
    db.session.add(image48)
    db.session.add(image49)
    db.session.add(image50)
    db.session.add(image51)
    db.session.add(image52)
    db.session.add(image53)
    db.session.add(image54)
    db.session.add(image55)
    db.session.add(image56)
    db.session.add(image57)
    db.session.add(image58)
    db.session.add(image59)
    db.session.add(image60)
    db.session.add(image61)
    db.session.add(image62)
    db.session.add(image63)
    db.session.add(image64)
    db.session.add(image65)
    db.session.add(image66)
    db.session.add(image67)
    db.session.add(image68)
    db.session.add(image69)
    db.session.add(image70)
    # db.session.add(image71)
    # db.session.add(image72)
    # db.session.add(image73)
    # db.session.add(image74)
    # db.session.add(image75)
    # db.session.add(image76)
    # db.session.add(image77)
    # db.session.add(image78)
    # db.session.add(image79)
    # db.session.add(image80)
    # db.session.add(image81)
    # db.session.add(image82)
    # db.session.add(image83)
    # db.session.add(image84)
    # db.session.add(image85)
    # db.session.add(image86)
    # db.session.add(image87)
    # db.session.add(image88)
    # db.session.add(image89)
    # db.session.add(image90)
    # db.session.add(image91)
    # db.session.add(image92)
    # db.session.add(image93)
    # db.session.add(image94)
    # db.session.add(image95)
    # db.session.add(image96)
    # db.session.add(image97)
    # db.session.add(image98)
    # db.session.add(image99)
    # db.session.add(image100)


    db.session.commit()



def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
