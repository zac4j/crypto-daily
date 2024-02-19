# Crypto Daily

## Backend

[![Kotlin](https://img.shields.io/badge/kotlin-1.9.22-blue.svg?logo=kotlin)](http://kotlinlang.org)
[![Ktor](https://img.shields.io/badge/ktor-2.3.8-blue.svg?logo=ktor)](http://ktor.io)
[![MongoDB](https://img.shields.io/badge/mongodb-4.11.0-blue.svg?logo=mongodb)](http://mongodb.io)

## Frontend

[![React.js](https://img.shields.io/badge/reactjs-18.2.0-blue.svg?logo=react)](https://react.dev/)
[![React Bootstrap](https://img.shields.io/badge/bootstrap-2.10.0-blue.svg?logo=bootstrap)](https://react-bootstrap.netlify.app/)

## Deloyment

### Frontend deloyment

+ Create web app

```bash
npm run build
```

+ Copy all web content from frontend/build to backend/src/main/resources/web

```bash
cp -r frontend/build/* backend/src/main/resources/web/
```

### Backend deployment

```bash
docker-compose up
```
