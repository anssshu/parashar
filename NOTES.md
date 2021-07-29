#0)react app creation and deployment process on github

install node and npm

#1)create a react app

npx create-react-app parashar

cd parashar

#2)change package.json file

"homepage": "http://anssshu.github.io/parashar",

under script
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

#3)install gh-pages
npm install gh-pages --save-dev

#4)deploy on git hub
create a github folder parashar

git add .
git commit -m "initial"
git remote add origin https://github.com/anssshu/parashar.git
git push origin master

npm run deploy

the entire project will be uploaded to github master branch
and the build folder will be uploaded to the gh-pages branch and the site will be deployed as a static website

For subsequent creation and edit of the project
use git push and npm run deploy








#REACTJS
the app consists of components which are class or functions

npm i react-router-dom
npm i react-icons

inside sidebar data add the data and use it inside the Navbar.js