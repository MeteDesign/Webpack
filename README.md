# MeteDesign Webpack V3.1

We provide some common configurations that saves a lot of time when you initially learn how to config webpack for developing.

Happy coding!

Blog site: http://blog.godotdotdot.com/2017/12/01/%E5%9F%BA%E4%BA%8Ewebpack-3-x-react-v16-antdesign%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE/

**We are nothing but porters of the Internet!**

This is a basic environment of webpack for react. We also provide another version for [ant-design](https://ant.design/),please switch to  `antdesign` branch.

## Usage

Before starting your project, you should run `npm run generdll` for building dll files!

### Installation

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

When you run npm run dev and open browser, navigationg to localhost:4000, you will see the welcome page shown as the following picture,

![](http://blog.godotdotdot.com/static/metedesign_basic.png)

## Features

In this configuration, the following features have been implemented:

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

More features can be found in webpack.config.js.

**NOTICE: Please copy this repository to the root directory of your project and run yarn or npm install. You will be good to go after installing all packages this repository depends on!**

Your PR is always Welcome！

------

**METE DESIGN GROUP**
