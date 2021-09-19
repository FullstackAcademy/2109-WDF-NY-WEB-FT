# Day 29: Authentication, Cookies, OAuth

**You should be able to:**
- Persist the state of a logged-in user by utilizing Express sessions
- Implement local authentication in a simple web application
- Configure an OAuth provider in a Node application using Passport


## Why do we need sessions?

- Sessions give us the ability to persist the client-server relationship by leveraging cookies. This is super useful in that sessions are tightly tied to user management – given a session, one should be able to retrieve the associated user information.


## Which of the following libraries can be used to implement authentication in Node applications?

|   | Option | Explanation |
| - | ------ | ----------- |
|   | `express-session` | This is to _implement_ sessions. |
|   | `cookie-maker` | |
| ☑️ | **`passport`** | This is the library that let's us implement authentication giving us the authentication middleware. |
|   | `passport-google-oauth` | This is a **strategy** to help us with authentication. |


## What is a cookie?

|   | Option | Explanation |
| - | ------ | ----------- |
|   | A persistent connection between a server and an individual client | Not this, as this will be defined in our headers. |
|   | An object that lives in memory on the server that contains a dictionary with information about visitors to that server | This is our session store. |
| ☑️ | **A small piece of data associated with a certain hostname that gets stored by a browser and sent with subsequent HTTP requests to that hostname** | The cookie gets created once it goes through the session middleware for the first request if it doesn't exist and gets sent with every subsequent request |
|   | Delicious! | Not _exactly_ the cookie we're talking about here. |


## How do you prevent improper access in a web application (i.e. prevent non-admin users from taking actions that should only be available to admins)?

- On the front end: hide admin controls and pages unless the logged-in user is an admin
- On the server: send error responses for requests that only admin should be able to make, unless the user on the session is an admin
- Both A and B are important, but A is more important because otherwise the user experience is really awkward
- **Both A and B are important, but B is more important because anyone can bypass your front-end and make requests to your API with curl** ☑️


## Which of the following is true about OAuth?

- The user never needs to communicate with the consumer, they only communicate with the provider
- The user never needs to communicate with the provider, they only communicate with the consumer
- The provider and consumer only communicate through the user, they never directly exchange information
- **The provider, consumer, and user all communicate with each other** ☑️
  - This is called the **three-way handshake** in which each player has a role:
    - **User Petition:** User <> Consumer (Think LeetCode and trying to login using GitHub on LeetCode.)
    - **User Authentication:**  User <> Provider (Think GitHub giving us the ability to login using its service on the target app, LeetCode.)
    - **App Authentication:** Consumer <> Provider (Is the user who they say they are?)
