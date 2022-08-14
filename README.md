# Sharednd

## Introduction
Welcome to Sharednd, a clone of the popular [Airbnb](https://www.airbnb.com/) website. With Sharednd, you can post homes for people to rent out and even rent out other homes to see the world! Sharednd is THE website for people and friends to book amazing homes and travel the world.

## Technologies Used
- Languages: Javascript, HTML, CSS
- Front-End: React-Redux, JSX
- Back-End: Python, Flask-SQLAlchemy
- Database: PostgreSQL
- Hosting: Heroku

## Link to live site
https://sharednd.herokuapp.com/

## Link to Wiki docs
https://github.com/dchung007/sharednd/wiki

## Features

### Register/Sign-in
Users can register an account on Instagram with a unique username, name, email and a password of their choosing. They can also sign in with their created email and password. If sign-in credentials are incorrect, error messages will alert the user to try again.

![Screen Shot 2022-08-13 at 5 57 57 PM](https://user-images.githubusercontent.com/84115420/184518188-212d5964-7eaf-4bc5-8158-ffd90ddc76fd.png)

![Screen Shot 2022-08-13 at 5 59 29 PM](https://user-images.githubusercontent.com/84115420/184518192-9bcc6a64-2a98-4f55-a1b2-431433563581.png)


### View Spot Listings
Any user, logged in or not, can view the spot listings page.

![Screen Shot 2022-08-13 at 5 48 14 PM](https://user-images.githubusercontent.com/84115420/184518196-5ba1ec26-ba19-4926-972a-73d515349a78.png)


## View Specific Spot Details
Any user, logged in or not, can view a specific spot's details page.

![Screen Shot 2022-08-13 at 5 56 26 PM](https://user-images.githubusercontent.com/84115420/184518201-9c8d823e-826f-4270-88a3-378119d1eb11.png)


### Creating, editing, and deleting Spots
All logged-in users can create their own spots. They can also only edit and delete their spots.

![Screen Shot 2022-08-13 at 5 53 07 PM](https://user-images.githubusercontent.com/84115420/184518219-4f756fe6-3473-46d1-baf0-858a053eebfb.png)

![Screen Shot 2022-08-13 at 6 00 44 PM](https://user-images.githubusercontent.com/84115420/184518221-bf2f1445-d361-4a90-aa33-30d287d8c094.png)


### Creating, viewing, editing and deleting Bookings
All logged-in users can create a booking on any spot. They can also edit or delete their own bookings.

![Screen Shot 2022-08-13 at 5 55 08 PM](https://user-images.githubusercontent.com/84115420/184518215-827ed79f-f7fa-40cd-9731-fdcc09a17e2c.png)


## Future features to implement
- Search Bar
- Direct Messaging
- Reviews
- Star ratings
- Google maps api

## Challenges Faced
- Implementing dates in bookings and using react Calendar turned out to be the most difficult aspect of the project. Displaying the calendar was not too difficult, but utilizing the tileDisabled prop function was definitely more difficult than anticipated. I had difficulty in disabling all dates on the calendar that had been booked. I was able to solve this by creating some helper functions that would check if the startDate and endDate of the new booking to be made overlapped with any old bookings.
