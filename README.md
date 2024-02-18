# Crypto Daily

## Backend

[![Kotlin](https://img.shields.io/badge/kotlin-1.9.22-blue.svg?logo=kotlin)](http://kotlinlang.org)
[![Ktor](https://img.shields.io/badge/ktor-2.3.8-blue.svg?logo=ktor)](http://ktor.io)
[![GitHub License](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg?style=flat)](http://www.apache.org/licenses/LICENSE-2.0)

MongoDB

## Frontend

React

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
