# notehandler back-end-server
NodeJS, Express, Typescript

# .env
Create a .env file in the root folder to store all your user credentials.

# scripts
```
  "deploy": "vercel deploy --prod",
    "start": "nodemon src/index.ts",
    "build": "rimraf dist && tsc",
    "ts.check": "tsc --project tsconfig.json",
    "add-build": "git add dist"
```
