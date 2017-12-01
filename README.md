# MeteDesign Webpack V3.1

Webpack configurations for `react` and `ant-design`. 

We provide some common configurations that saves a lot of time when you initially learn how to config webpack for developing.

Happy coding!

**We are nothing but porters of the Internet!**

## Usage

Before starting your project, you should run `npm run generdll` for building dll files!

### Installation

``` bash
$ git clone https://github.com/MeteDesign/Webpack.git
$ cd Webpack
$ npm install
```

### Development Environment

``` bash
$ npm run dev
```

### Production Environment

``` bash
$ npm run build
```

### DLL Build

``` bash
$ npm run generdll
```

When you run `npm run dev` and open browser, navigationg to `localhost:4000`, you will see the welcome page shown as the following picture,

![](http://blog.godotdotdot.com/static/metedesign_antd.png)

When you type `localhost:4000/login.html`, you will see the login page, it looks like:

![](http://blog.godotdotdot.com/static/metedesign_login.png)

In this project, we use two entry files (including main and login).

As shown in the above picture, our design is based on [ant-design-pro](https://preview.pro.ant.design/#/dashboard/analysis).

## Features

In this configuration, the following features have been implemented:

- Extract common chunks
- Lazyloading (react component)
- DLL support
- Extract css styles to a single file
- Multipart entry support
- Hot module replacement
- Long term cache support
- Postcss support
- sass/less/css support
- dead code removal and minification
- ...

More features can be found in `webpack.config.js`.

**NOTICE: Please copy this repository to the root directory of your project and run `yarn` or `npm install`. You will be good to go after installing all packages this repository depends on!**

Your PR is always Welcome！

------

**METE DESIGN GROUP**
