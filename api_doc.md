# Animals Images Library

## Available endpoints
- `POST /register`
- `POST /login`

- `POST /animals/dogs`
- `POST /animals/fox`
- `POST /animals/cats`

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

## LIBRARY endpoints
### GET /cats

> Fetch cat image url

_Request Header_
```
access_token (string)
```

_Request Body_
```
not needed
```

_Response (200 - Ok)_
```
{
  "breeds": "Cornish Rex",
  "id": "kOAHCDEzA",
  "length": 1,
  "height": 1365,
  "url": "https://cdn2.thecatapi.com/images/kOAHCDEzA.jpg"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### GET /dogs

> Fetch dog image url

_Request Header_
```
access_token (string)
```

_Request Body_
```
not needed
```

_Response (200 - Ok)_
```
{
  "url": "https://random.dog/ec0b2aba-4aa0-4982-a54d-80994fced5c2.mp4%22%7D"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### GET /fox

> Fetch fox image url

_Request Header_
```
access_token (string)
```

_Request Body_
```
not needed
```

_Response (200 - Ok)_
```
{
  "image": "https://randomfox.ca/images/89.jpg",
  "link":"https://randomfox.ca/?i=89"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

