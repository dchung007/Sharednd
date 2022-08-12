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

![Screen Shot 2022-07-27 at 3 45 50 PM](https://user-images.githubusercontent.com/84115420/181385361-2db4b5ac-0e58-4e3c-8519-7a04c8eb1e82.png)

![Screen Shot 2022-07-27 at 3 42 25 PM](https://user-images.githubusercontent.com/84115420/181385374-ded2096f-e4eb-4313-ad70-ca76a4edb2eb.png)



### View Spot Listings
Any user, logged in or not, can view the spot listings page.

![Screen Shot 2022-07-27 at 3 40 59 PM](https://user-images.githubusercontent.com/84115420/181387347-8dfd8fa3-a81d-4210-9d43-fbdc186c02f3.png)


## View Specific Spot Details
Any user, logged in or not, can view a specific spot's details page.

![Screen Shot 2022-07-27 at 3 41 13 PM](https://user-images.githubusercontent.com/84115420/181385625-8f32a70c-04d0-47af-ae45-85d116578bc0.png)



### Creating, editing, and deleting Spots
All logged-in users can create their own spots. They can also only edit and delete their spots.

![Screen Shot 2022-07-27 at 3 55 42 PM](https://user-images.githubusercontent.com/84115420/181386385-44556506-c452-491c-8468-2984824ecc3e.png)

![Screen Shot 2022-07-28 at 7 49 06 AM](https://user-images.githubusercontent.com/84115420/181567052-a1e189bf-1525-43a7-ac01-a28d360e4ab2.png)

![Screen Shot 2022-07-28 at 7 53 56 AM](https://user-images.githubusercontent.com/84115420/181568600-3444b4a8-dff5-4930-ac37-5ef288cdf4fb.png)


### Creating, viewing, editing and deleting Bookings
All logged-in users can create a booking on any spot. They can also edit or delete their own bookings.

![Screen Shot 2022-07-28 at 7 52 27 AM](https://user-images.githubusercontent.com/84115420/181568302-62a1f787-9b45-4b00-a801-12e28139238a.png)

![Screen Shot 2022-07-28 at 7 59 31 AM](https://user-images.githubusercontent.com/84115420/181570874-bbdeb4a8-1abf-4323-8eab-20041d116fab.png)



## Future features to implement
- Search Bar
- Direct Messaging
- Reviews
- Star ratings
- Google maps api

## Challenges Faced
- Implementing the likes and follow was definitely the most difficult aspect of the project. We had issues especially dealing with the Followers model in the database. The relationship, which required userId and userId, required us to implement backref within the User model relationship. In regards to both the likes and followers redux slice of states, we had to update the likes and followers slice of state depending on the page the user is at. We needed to update the state for both sesssion user and user if the user is on someone's profile page and decides to follow them.
