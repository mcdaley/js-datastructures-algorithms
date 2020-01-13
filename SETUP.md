# Instructions for Starting JavaScript Project

## Dependencies
node
npm
### Setup npm defaults

## Instructions
mkdir project-name
cd    project-name
npx   license mit > LICENSE
npx   gitignore node
npx   covgen YOUR_EMAIL_ADDRESS
npm   init -y
npm   install
git   init .

### Install Babel

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

**NOTE:** 
@babel/polyfill needs to be run with **--save** instead of **--save-dev**

### Install Jest
npm install --save-dev jest

### Configure Jest in pacakge.json
Update the **scripts** section to make jest the default test framework

```
"scripts": {
    "test": "jest"
  },
```

### Configure Jest w/ Babel
npm install --save-dev babel-jest
npm install --save-dev @babel/plugin-proposal-class-properties

Update the plugins section of the babel.config.js
**Need to add configuration here!**

## VSCode Setup
Need to configure VSCode in order to debug the applications using VSCode.
