# ForgeStatus Dashboard

[![CircleCI](https://circleci.com/gh/chrisstowe/forgestatus-dashboard.svg?style=svg)](https://circleci.com/gh/chrisstowe/forgestatus-dashboard)

## Description

A visual dashboard for displaying distributed system status and metrics. 📊

This is a visual dashboard for [forgestatus](https://github.com/chrisstowe/forgestatus).

#### Live Builds

These are fully automated and monitored instances.

[forgestatus.com](http://forgestatus.com)

[dev.forgestatus.com](http://dev.forgestatus.com)

#### Raw API Data

[forgestatus.com/api/status](http://forgestatus.com/api/status)

[dev.forgestatus.com/api/status](http://dev.forgestatus.com/api/status)

## Building

### Docker

This is for demo purposes.

A webserver is started and the client can be reached at localhost:3000.

A locally running instance of [forgestatus.com](http://forgestatus.com) is also required.

```
$ docker-compose up
```

## NPM

This is for local development purposes.
A locally running instance of [forgestatus.com](http://forgestatus.com) is also required.

```
$ npm i
$ npm start
```
