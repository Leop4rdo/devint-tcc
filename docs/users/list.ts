// CADASTRO
ENDPOINT : [POST] /api/v1/users
RES : {
  "status": 201,
  "hasError": false,
  "data": {
      "id": "e7d50910-ec1d-4049-bc4f-fb78eff40e8c",
      "email": "test@mail.com",
      "name": "test",
      "enabled": true,
      "role": 0
  }
} 
// LISTA USUARIOS CADASTRADOS
ENDPOINT : [GET] /api/v1/users
RES : {
  "status": 200,
  "hasError": false,
  "data": [
      {
          "id": "5e5e6a1c-37a2-4d0f-8632-6279297d4ece",
          "email": "test2@mail.com",
          "name": "test2",
          "enabled": true,
          "role": 0
      },
      {
          "id": "e7d50910-ec1d-4049-bc4f-fb78eff40e8c",
          "email": "test@mail.com",
          "name": "test",
          "enabled": true,
          "role": 0
      }
  ]
}
// LISTA USUARIOS BY ID 
ENDPOINT : [GET] /api/v1/users/id
RES : {
  "status": 200,
  "hasError": false,
  "data": {
      "id": "5e5e6a1c-37a2-4d0f-8632-6279297d4ece",
      "email": "test2@mail.com",
      "name": "test2",
      "enabled": true,
      "role": 0
  }
}
// AUTENTICAÇÃO USUARIO CADASTRADOS
ENDPOINT : [PUT] /api/v1/auth
RES : {
  "status": 200,
  "hasError": false,
  "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU3ZDUwOTEwLWVjMWQtNDA0OS1iYzRmLWZiNzhlZmY0MGU4YyIsImVtYWlsIjoidGVzdEBtYWlsLmNvbSIsIm5hbWUiOiJ0ZXN0IiwiZW5hYmxlZCI6dHJ1ZSwicm9sZSI6MCwiaWF0IjoxNjYxMzY5NzE3LCJleHAiOjE2NjE0NTYxMTd9.iYrpstz1J8KsQNGl0P8Z6ZHW76sYRYLqvy4Uk0kQrJI",
      "user": {
          "id": "e7d50910-ec1d-4049-bc4f-fb78eff40e8c",
          "email": "test@mail.com",
          "name": "test",
          "enabled": true,
          "role": 0
      }
  }
}



