# Day 26: Authentication, JWT, bcrypt

**You should be able to:**
- Explain the motivation for token-based authentication.
- Describe the various parts of a JSON web token.
- Implement JWT authentication in a full stack application using the jsonwebtoken library.
- Explain the motivation for encrypting passwords.
- Use the bcrypt library to encrypt passwords before you store them in your database.


## What is the motivation behind using token-based authentication?

- Instead of asking users to provide their username and password along with every request, we provide them a single token after logging in that will accompany future request.


## A JWT consists of three parts. Which of the following is NOT one of those parts?

|   | Option | Explanation |
| - | ------ | ----------- |
|   | Signature | This is the part that verifies the authenticity of the token (generated using a secret) |
|   | Payload | This is where we store our data (eg user id) |
|  | Header | This is where the type and hashing algorithm are declared |
|  ☑️ | Authorization | Not one of the three parts |


## Where is a JWT stored?

|   | Option | Explanation |
| - | ------ | ----------- |
|  ☑️ | Frontend | Tokens are provided by the server, but are only stored and managed by the frontend |
|   | Backend (server) |  |
|  | Backend (database) |  |
|   | All of the above |  |


## Which of the following is true regarding hashing passwords with bcrypt? 

|   | Option | Explanation |
| - | ------ | ----------- |
|  ☑️ | Hashed passwords are extra secure due to the "salting" process that adds a bit of randomness to hashing | Salting happens every time you hash the password so that if muliple users have the same password, the hashing output still looks different |
|   | After hashing a password it's impossible to compare it with plain passwords | Not true - the `bcrypt` compare function is able to compare it |
|  | If you hash the same password more than once, you'll get the same hashed output every time | Not true due to salting  |
|   | It is still unsafe to store hashed passwords in your database | Not true - after hashing passwords it is okay to store them in your database |


