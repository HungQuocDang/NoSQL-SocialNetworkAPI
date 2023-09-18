# NoSQL-SocialNetworkAPI



## Procedures

User will use VS code and Insomia 2023.5.8 and MongoDB 7.0.0 to verify the affectations of data into the data base MongoDB.

First to clone the code from Github
Then type npm i
Type node index.js
Then open the Insomia and MongoDB, when the below are entered in Insomia, the MongoDB database is affected.





1)GET all users; listing of "username", "email", "freinds", "thoughts"
GET http://localhost:3001/api/users

2)GET one user by ID as 650423d7eb1fb4a73fd0fd56
GET  http://localhost:3001/api/users/650423d7eb1fb4a73fd0fd56

3)POST to create a user, by entering "username", "email".
POST  http://localhost:3001/api/users
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}

4)DELETE to remove user by its _id
DELETE  http://localhost:3001/api/users/64fe5a06b56b73e5a93176c6


5)PUT to update a user by its _id   NOT WORKING, to check.
PUT  http://localhost:3001/api/users/64fe5a06b56b73e5a93176c6



6)GET to get a single thought by its _id
GET http://localhost:3001/api/thoughts/64fe5dd4b56b73e5a93176cb

7)POST to create a new thought by entering userId
POST http://localhost:3001/api/thoughts
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}

8)DELETE to remove a thought (thought Table) by its _id
DELETE  http://localhost:3001/api/thoughts/65003c6c9ea0bfc749caf322



/api/thoughts/:thoughtId/reactions


10)POST to create a reaction stored in a single thought's reactions array field
POST http://localhost:3001/api/thoughts/64ff5de4ca2c1ce8d3e0e571/reactions
{
 "responseBody": "Here's a cool thought... sep 12",
  "username": "lernantino sep 12"
}


Not working yet:
DELETE to pull and remove a reaction by the reaction's reactionId value
http://localhost:3001/api/thoughts/64ff5de4ca2c1ce8d3e0e571/reactions:65082315b412d435d544c971




![Insomia_MongooseDb](https://github.com/HungQuocDang/NoSQL-SocialNetworkAPI/assets/129162404/719339cc-e381-4024-a8d7-ad3d5e2d804f)

