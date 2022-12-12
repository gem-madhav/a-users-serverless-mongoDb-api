# a-users-serverless-mongoDb-api
It is a simple users REST api built using serverless and mongoDb. You can create, read, update and delete users. A user can have name, email and phone.

## Usage

To run the api locally , run these commands in the terminal.

```bash
 npm install  # To install the dependencies
 serverless offline start  # To start the api
```

## API endpoints
  - POST - <https://3zplvpc6w6.execute-api.ap-south-1.amazonaws.com/dev/create-user>
  - PUT - <https://3zplvpc6w6.execute-api.ap-south-1.amazonaws.com/dev/update-user/{id}>
  - DELETE - <https://3zplvpc6w6.execute-api.ap-south-1.amazonaws.com/dev/delete-user/{id}>
  - GET - <https://3zplvpc6w6.execute-api.ap-south-1.amazonaws.com/dev/users/{id}>
  - GET - <https://3zplvpc6w6.execute-api.ap-south-1.amazonaws.com/dev/users>
