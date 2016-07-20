# Angular 2 QuickStart Source

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples and potentially a good starting point for your application.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/angular/quickstart  my-proj
cd my-proj
```

We have no intention of updating the source on `angular/quickstart`.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
### Start development

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```
You're ready to write your application.

Remember the npm scripts in `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.



# Steps for troubleshooting

Sometimes when trying to starting the App: 

```bash
sudo npm start
```

The following errors appear:

```bash
npm ERR! Darwin 15.5.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "typings" "install"
npm ERR! node v6.3.0
npm ERR! npm  v3.10.3
npm ERR! code ELIFECYCLE
npm ERR! insuite@1.0.0 typings: `typings "install"`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the insuite@1.0.0 typings script 'typings "install"'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the insuite package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     typings "install"
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs insuite
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls insuite
npm ERR! There is likely additional logging output above.

npm ERR! Please include the npfollowing file with any support request:
npm ERR!     /Users/juniorlinn/Desktop/insuite/npm-debug.log
```

# Solution

To solve this problem, follow the steps bellow:

First try to clean the npm cache:

```bash
npm cache clean
npm cache clear
```
If that does not work, then try the steps bellow:

## 1. Remove the node_modules folder

```bash
rm -rf node_modules
```


## 2. Remove Typings Folder

```bash
rm -rf typings
```


## 3. Reinstall the pakages

```bash
npm install
```




## 4. Start the App
```bash
npm start
```

It should work now!


# Quick GIT commands

```bash
git status
```

```bash
git add
```

```bash
git commit -m "message"
```

```bash
git push
```



##Create a new repository on the command line

```bash
echo "# insuite" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/juniorlinn/insuite.git
git push -u origin master
```


##Push an existing repository from the command line

```bash
git remote add origin https://github.com/juniorlinn/insuite.git
git push -u origin master
```