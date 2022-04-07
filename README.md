# cra-template-typescript-bare-sh4nnongoh

## Quick Start (Linux)
Ensure you have the latest stable ```node``` installed, or you may use [nvm](https://github.com/nvm-sh/nvm) to switch between ```node``` versions.
Install ```yarn```, and create your react app using ```react-app```.
```
nvm install --lts
nvm use --lts

npm i -g yarn

git clone https://github.com/sh4nnongoh/cra-ts-template-bare-sh4nnongoh.git

yarn create react-app my-app --template file:<path-to-template>/cra-ts-template-bare-sh4nnongoh/

cd my-app
node ./scripts/setup.js
```

## Other Information

Setting up jest to work with Babel if you do not want to use ```react-scripts test```:
https://medium.com/@katopz/how-to-debug-es6-nodejs-with-vscode-8d00bd6c4f94

Understanding why no devDependencies:
https://github.com/facebook/create-react-app/issues/4342

Why ```yarn``` over ```npm```:
https://overreacted.io/npm-audit-broken-by-design/
