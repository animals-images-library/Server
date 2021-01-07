# Animals Images Library

## Available endpoints
- `POST /register`
- `POST /login`

## RESTful endpoints
### POST /register

> Create new user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201 - Created)_
```
{
  "id": <given id by system>,
  "email": "<posted email>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Validation Errors"
}
```

---
### POST /login

> Login

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (200 - OK)_
```
{
  "access_token": "<access_token>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid input/password"
}
```
