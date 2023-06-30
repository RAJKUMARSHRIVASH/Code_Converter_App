# Code COnverter App

This is a AI code converter app using that anyone can convert their code from one programming language to another
also it can debug you code and perform quality check for your code.

## Features

- Cross platform
- AI

## Tech Stack

**Client:** HTML, CSS, JavaScript

**Server:** NodeJs, Express, Open-ai

## Run Locally

Clone the project

```bash
  git clone https://github.com/RAJKUMARSHRIVASH/Code_Converter_App.git
```

Go to the project directory

```bash
  cd Code_Converter_App
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`OPENAI_API_KEY`

## API Reference

#### Welcome 

```http
  GET /
```

#### POST

```http
  POST /convert
```
```http
  POST /debug
```
```http
  POST /checkquality
```

## Demo
```
https://codeconverterapp.onrender.com
```
## Screenshots

![App Screenshot](https://i.imgur.com/7W1Pxsm.png)

![App Screenshot](https://i.imgur.com/o2ETOrW.png)

## Author

- [@Raj Kumar Sen](https://github.com/RAJKUMARSHRIVASH)

