# micro-rest API & async + await

Minimal project for building REST APIs with Zeit's [Micro](https://github.com/zeit/micro) and async + await.

## Installation

```bash
npm install micro micro-api
```
## Compile with babel

To optimize startup time we will pre-compile code before you ship. For that, you can define a task like this:
```
"scripts": {
  "build": "babel lib --out-dir dist"
}
```
If you plan to start or publish, make sure that you only serve from `dist` directory after babel comilation:

```
"scripts": {
        "start": "micro -p 3000 dist/",
        "prestart": "npm run build",
        "build": "babel lib --out-dir dist",
        "prepublish": "npm run build"
    },
```
## Run
Finally, micro gives you a little binary to launch the exported microservice easily:
```
"scripts": {  
  // …
  "start": "micro -p 3000 dist/"
}
```

## Reference

[](https://gist.github.com/rauchg/8199de60db48026a6670620a1c33b700/)