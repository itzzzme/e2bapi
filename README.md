# <p align="center">Anime API</p>

>

<p align="center">API made with Node.js ( scrape data primarily from <a href="https://hianime.to" target="_blank">hianime.to</a> and secondarily from <a href="https://kaido.to" target="_blank">kaido.to</a> )</p>

# <span style="color:red">! Disclaimer !</span>

1.  Please don't spam the `api`. This `api` is deployed on a free web service. You can clone this repository on your local server for testing purposes.

2.  This `api` is not made for commercial usage.

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
  https://e2bapi.onrender.com/api/
```

> #### No parameter required ❌

#### Example of request

```javascript
import axios from "axios";
const resp = await axios.get("https://e2bapi.onrender.com/api/");
console.log(resp.data);
```

#### Sample Response

```javascript
{
  "Message": English to Bengali dictionary API,
}
```

### `Get` Meaning of a word

```bash
  GET /api/word
```

### Endpoint

```bash
  https://e2bapi.onrender.com/api/word
```

#### Parameters

| Parameter |  Type  | Description | Mandatory ? | Default |
| :-------: | :----: | :---------: | :---------: | :-----: |
|   `params`    | string |    word     |   Yes ✔️    |   --    |

#### Example of request

```javascript
import axios from "axios";
const resp = await axios.get("https://e2bapi.onrender.com/api/hello");
console.log(resp.data);
```

#### Sample Response

```javascript
{
    "success":true,
    "results": {
        "word":string,
        "meaning":[
            string,
            string
        ],
        "nearbyWords":[
            string,
            string,
            string,
            string,
            string,
            string
        ]
    }
}

```

>### Pull Requests

- Pull requests are welcomed that address bug fixes, improvements, or new features.
- Fork the repository and create a new branch for your changes.
- Ensure your code follows our coding standards.
- Include tests if applicable.
- Describe your changes clearly in the pull request, explaining the problem and solution.

>### Reporting Issues

If you discover any issues or have suggestions for improvement, please open an issue. Provide a clear and concise description of the problem, steps to reproduce it, and any relevant information about your environment.

>### Support
If you like the project feel free to drop a star ✨. Your appreciation means a lot.

<p align="center" style="text-decoration: none;">Made by <a href="https://github.com/itzzzme" target="_blank">itzzzme 
</a>🫰</p>