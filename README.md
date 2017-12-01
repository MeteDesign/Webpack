# MeteDesign Webpack V3.1

We provide some common configurations that can reduce a lot of time when you learn how to config webpack for developing.Enjoy you trip!

**We are only the porters of the Internet**

This is a basic environment of webpack for react. We also provide another version for [ant-design](https://ant.design/),please switch to  `antdesign` branch.

## Usage

Before starting your project, you should run `npm run generdll` for building dll files!

### Install

```javascript
$ git clone https://github.com/MeteDesign/Webpack.git
$ cd Webpack
$ npm install
```

### Development Environment

```javascript
$ npm run dev
```

### Production Environment

```javascript
$ npm run build
```

### DLL Build

```javascript
$ npm run generdll
```

When you run `npm run dev` and open browser at `localhost:4000`, you will see the welcome page as the following picture show,

![](http://blog.godotdotdot.com/static/metedesign_basic.png)

## Features

In this configuration, you can use some following features:

- Etract commons chunk
- DLL surport
- Etract css styles to a single file
- Multipart entry surport
- Hot module relacement
- Long  term cache surport
- Postcss  surport
- sass/less/css surport
- Minify remove some of the dead code
- ...

More features will be find in `webpack.config.js`

**NOTICE: Please copy this repository to the root directory of  your project and  run `yarn` or `npm install` ,  just do what you want  after installing all of packages that this repository dependencies!**

PR Welcome！

------

**METE DESIGN GROUP**