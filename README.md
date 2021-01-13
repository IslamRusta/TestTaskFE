# Getting Started with Create React App

Test task FE

## How to run using yarn

### `yarn`
### `yarn start`

## How to run using npm

### `npm`
### `npm start`

## Project structure

I am using feature-first approach to structure this project since this is a small task. 

## Description

You can sign in the app with your email and enter referral code if you have one.
Due to time limits I did not implement separate endpoints for login and registration, so you can use signing in both for login and registration.
The logic to understand whether user registered or not is implemented on BE.

LocalStorage was used to store data like email and referral code, instead of store management tool.
Because of this testing of the app should happen in one browser.

To make API calls I used Axios library. Proxy pattern was used to make API calls.
