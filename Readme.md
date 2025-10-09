# Imagify

## Imagify Backend Project SetUp (Node.js + Express.js)

### Preparing node project for backend
**Step 1:** Open terminal and run the command.
- ``npm init``
- Create a index.js file in the root folder
- Change this ``"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },`` to ``"scripts": {
    "dev": "node index.js"
  },``
- Add ``"type": "module"`` in package.json file

**Step 2:** Add prettier and git to the code base.
- Install prettier run the command on terminal ``npm install --save-dev --save-exact prettier``
- And ``npx prettier . --write``
- Now add these in the file .prettierrc:
```
{
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": false,
    "trailingComma": "all",
    "bracketSpacing": true,
    "arrowParens": "always"
}
```
- Create .prettierignore and .gitignore files in the root folder and write:
```
node_modules
.env
```
**Step 3:** Auto restart the server using Nodemon
```
npm install --save-dev nodemon
```
Next in package.json file make changes
```
"scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  }
```

**Step 4:** Add dot env files in backend (for hiding secrets)
- install dot env in your project by running npm i dot-env in terminal.
- And create a .env file on the root directory of project.