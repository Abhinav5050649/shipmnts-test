# Shipmnts Backend for Automated Email Scheduling API

This repository contains the Back-end for the Automated Email Scheduling API

## Setup

1) Clone the repo
2) Install the dependencies
3) Create a .env file.
4) Login to firebase console and create a new project and in it, a new web app
5) In the console, create firestore database and firebase storage. Take all the necessary SDKs and connection URLs associated with initialising a web app into the env file
6) In the env file, add the following:
MONGO_URL
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN 
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APP_ID
FIREBASE_ADMIN_PATH
BUCKET_URL
7) Also, download the admin sdk from firebase and keep the json file in the root directory. Take it's relative path and store it in firebase_admin_path variable of env file


## To Run

1) Open terminal
2) Type "node index"