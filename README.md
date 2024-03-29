# Todo-List-Project

## What is the use of this Repo [![Generic badge](https://img.shields.io/badge/What-VueJS-blue.svg)](https://vuejs.org/v2/guide/)

This Repo demonstrates the use of the following in vuejs
1. Vue Routing
2. Components
3. Communication between Components ( Parent to child component )
4. Axios Library to make HTTP calls

## Prerequisites

### Install NodeJS [![Generic badge](https://img.shields.io/badge/Prerequisite-NodeJS-blue.svg)](https://nodejs.org/en/)

Refer https://nodejs.org/en/ to install NodeJS

### Install Vue Cli [![Generic badge](https://img.shields.io/badge/Prerequisite-VueCli-blue.svg)](https://cli.vuejs.org/guide/)

Install Vue Cli Node Package Globally using the following Command.

```bash
npm install -g @vue/cli
```
## Cloning and Running the Application

Clone the application to local

Go into the project Folder and install the npm packages using the following command
```bash
npm install
```

Run the following command to run the local database json server
```
npx json-server --watch database.json --port 3000
```

Run the following command to run the application
```
npm run dev
```

The Database Json server runs on **localhost:3000**

The Application runs on **localhost:5173**

## Application Design

### Views and components

**Todo List** : This View Displays a list of todo items and gets the data from a json and also displays a option to add todo items into the same json

**Done List** : This View Displays a list of done items and gets the data from a json

### Http Library [![Generic badge](https://img.shields.io/badge/http-axios-blue.svg)](https://www.npmjs.com/package/axios)

**axios** library is used to make http calls

### Routing

The Application has 2 endpoints

**/todo** : The ties to *Todo List* View

**/done** : This ties to *Done List* View

## References

**VueJS** : https://vuejs.org/v2/guide/

**vue cli** : https://cli.vuejs.org/guide/

**axios** : https://www.npmjs.com/package/axios

**vue bootstrap** : https://bootstrap-vue.js.org/docs

**vue router** : https://router.vuejs.org/guide/