# Crypto Daily

## Introduction

Stay ahead of the crypto curve with Crypto Daily: Real-time prices, insights, and trends.

Unlock the power of real-time data with Crypto Daily, your one-stop shop for all things crypto. Dive into live prices, comprehensive coin stats, and trending market insights, all conveniently at your fingertips.

Uncover emerging trends and innovations by exploring the latest news and analysis from top cryptocurrency media outlets. Our app's seamless integration ensures you receive instant updates on crucial information, empowering you to make informed decisions.(MVP+1)

Enjoy the cryptocurrency revolution with Crypto Daily!

## Showcase

<img width="960" alt="crypto-daily-webpage" src="https://github.com/zac4j/crypto-daily/assets/17920307/8b54762f-e371-44c0-bdc3-4faf7ff98315">


## Overview

![crypto_daily_overview](https://github.com/zac4j/crypto-daily/assets/17920307/cccd15b0-8e9a-4cff-a7fb-f89cfebe71ed)

## Tech Details

### Backend

[![Kotlin](https://img.shields.io/badge/kotlin-1.9.22-blue.svg?logo=kotlin)](http://kotlinlang.org)
[![Ktor](https://img.shields.io/badge/ktor-2.3.8-blue.svg?logo=ktor)](http://ktor.io)
[![MongoDB](https://img.shields.io/badge/mongodb-4.11.0-blue.svg?logo=mongodb)](http://mongodb.io)

### Frontend

[![React.js](https://img.shields.io/badge/reactjs-18.2.0-blue.svg?logo=react)](https://react.dev/)
[![React Bootstrap](https://img.shields.io/badge/bootstrap-2.10.0-blue.svg?logo=bootstrap)](https://react-bootstrap.netlify.app/)

## Start Web App

### Start Backend Server

```bash
cd backend
docker-compose up
```

### Web UI

Open `http://localhost:8080` to see the Web UI

## Testing

### Backend UnitTest

```bash
cd backend
./gradlew test
```

## Deloyment

### Frontend deloyment

+ Build web app

```bash
npm install
npm run build
```

+ Clear then copy new web contents to the backend web folder

```bash
rm -rf backend/src/main/resources/web/
cp -r frontend/build/* backend/src/main/resources/web/
```

### Backend deployment

The `Dockerfile` and `docker-compose.yml` files are valid and available for Docker depolyment.

However, some vendors are not support the docker-compose such as [Render.com](https://render.com).

To deloy service on Render we can use the [Blueprint solution](https://docs.render.com/blueprint-spec) , the deploy file is `render.yaml`.
