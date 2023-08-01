# SOCIAL NETWORK API

## DESCRIPTION

 To build API for social network that uses a NoSQL database
so that the website can handle large amounts of unstructured data.

## USAGE

When the user enter the command to invoke the application,Then the server is started and the Mongoose models are synced to the MongoDB database.

When the user open API GET routes in Insomnia for users and thoughts,Then the data for each of these routes is displayed in a formatted JSON.

When the test API POST, PUT, and DELETE routes in Insomnia,Then the user is able to successfully create, update, and delete users and thoughts in my database.

When the user test API POST and DELETE routes in Insomnia,Then the user is able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.


## SCREENSHOTS

1. GET all users
![screenshot](./assets/images/get%20all%20users.png)

2. GET all thoughts
![screenshot](./assets/images/get%20all%20thoughts.png)

3. GET user by id
![screenshot](./assets/images/get%20user%20by%20id.png)

4. GET thoughts by id
![screenshot](./assets/images/get%20thoughts%20by%20id.png)

5. POST user 
![screenshot](./assets/images/post%20user.png)

6. DELETE user
![screenshot](./assets/images/delete%20.png)

7. POST add friend 
![screenshot](./assets/images/post%20add%20friend.png)

8. DELETE friend
![screenshot](./assets/images/delete%20friend.png)


## WALKTHROUGH VIDEO


https://github.com/priyankav89/socialnetworkapi/assets/127457597/440707bb-298d-49a4-9b10-6ae317ad9d3d



## TESTING

1. npm install or npm i to install node package and package.json .
2. npm run seed to seed data into the database.
3. npm start to start the application.
4. Insomnia is used to test the api routes.
5. MongoDB Compass is also used to test the app.

## CREDITS

# REFERENCES :

https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb

https://mongoosejs.com/docs/models.html


## LICENSE

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
