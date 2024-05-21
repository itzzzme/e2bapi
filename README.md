# <p align="center">Anime API</p>

>

<p align="center">API made with Node.js ( scrape data primarily from <a href="https://hianime.to" target="_blank">hianime.to</a> and secondarily from <a href="https://kaido.to" target="_blank">kaido.to</a> )</p>

# <span style="color:red">! Disclaimer !</span>

1.  Please don't spam the `api`. This `api` is deployed on a free web service. You can clone this repository on your local server for testing purposes.

2.  This `api` does not store any files , it only link to the media which is hosted on 3rd party services.

3.  This `api` is explicitly made for educational purposes only and not for commercial usage. This repo will not be responsible for any misuse of it.

> <h2> Table of Contents </h2>

- [Installation](#installation)
  - [Local installation](#local-installation)
- [Deployment](#deployment)
  - [Render](#Render)
- [Documentation](#documentation)
- [Pull Requests](#pull-requests)
- [Reporting Issues](#reporting-issues)
- [Support](#support)

> # Installation

## Local installation

Make sure you have node installed on your device

Run the following code to clone the repository and install all required dependencies

```bash
$ git clone https://github.com/itzzzme/e2bapi.git
$ cd e2bapi
$ npm install
```

Start the server

```bash
$ npm start #or npm run devStart
```

> # Deployment

### Render

Host your own instance of e2bapi on Render.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/itzzzme/e2bapi)

> # Documentation

### `Get` Basic info

```bash
  GET /api/
```

### Endpoint

```bash
  https://e2bapi.onrender.com//api/
```

> #### No parameter required ❌

#### Example of request

```javascript
import axios from "axios";
const resp = await axios.get("https://e2bapi.onrender.com//api/");
console.log(resp.data);
```

#### Sample Response
