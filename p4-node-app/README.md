# Back-end nodeJS project

## Developer

Jefferson D. Rosimo

## About the app

This is a backend for vepply, a vegetable production monitoring app. Users can monitor currently planted vegetable crops.

### User stories

1. As a user, i want to monitor the current supply production of vegetables so that i would know what to produce and what not to.
2. As a user, i must be able to register an account and login using that account
3. As a user, i must be able to delete or harvest my crops.
4. As a user, i want to add and register my currently planted vegetable crop so that i will be able to inform and help other users in monitoring the current status of production of a certain vegetable crop
5. As an admin, i want to approve pending vegetable crops added by user so that all crops added are verified and inspected before being reflected to the data shown in dashboard and crop list.

#### Technologies used

- MongoDB
- NodeJS
- ExpressJS
- mongoose
- morgan
- body-parser
- bcrypt
- cors (cross-origin resource sharing)
- helmet

### Entity Relationship Diagram (ERD)

![](./assets/images/vepply-ERD.PNG)

### Database and API design

| Action | Route                         |     |
| ------ | ----------------------------- | --- |
| Create | /login                        |     |
| POST   | /register                     |     |
| POST   | /me/from/token                |     |
| GET    | /cloudinary-data/:pid         |     |
| GET    | /profile/:userId/uploads      |     |
| GET    | /profile/:userId/uploads/:uid |     |
| POST   | /profile/:userId/uploads      |     |
| DELETE | /profile/upload/delete        |     |
