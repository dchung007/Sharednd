from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', name='Demo', email='demo@email.com', password='password'
    )
    user2 = User(
        username='David', name='David Chung', email='davidchung@email.com', password='password'
    )
    user3 = User(
        username='Jonathan', name='Jonathan Kim', email='jonathankim@email.com', password='password'
    )
    user4 = User(
        username='Eddie', name='Eddie Lau', email='eddielau@email.com', password='password'
    )
    user5 = User(
        username='Abel', name='Abel Tesfa', email='abeltesfa@email.com', password='password'
    )
    user6 = User(
        username='Lynn', name='Lynn Luong', email='lynn@email.com', password='password'
    )



    db.session.add(demo)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
