# MeteDesign Webpack V3.1 
## Usage

Before starting your project, you should run `npm run generdll` for building dll files!

Maybe you'll see some error messages, like the following error info:

```javascript
ERROR in multi lodash moment
Module not found: Error: Can't resolve 'moment' in 'C:\Users\chuku\Documents\FrontEnd\supermap\Webpack'
 @ multi lodash moment

ERROR in ./src/index.js
Module not found: Error: Can't resolve 'moment' in 'C:\Users\chuku\Documents\FrontEnd\supermap\Webpack\src'
 @ ./src/index.js 2:0-28
```

Because the config files include `moment` and `lodash` libraries as test, you can remove it if it is not necessary or run `npm install moment lodash`.

>  The two libraries `moment` and `lodash` will be found in `webpack.config.js` ,`/src/index.js `and `webpack.dll.js`.

### Install

```javascript
$ git clone https://github.com/MeteDesign/Webpack.git
$ cd Webpack
$ npm install
```

###  Development Environment

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

**NOTICE: Please copy this repository to the root directory of  your project and  run `npm install` ,  just do what you want  after installing all of packages that this repository dependencies!**

PR Welcome！

------

**METE DESIGN GROUP**
