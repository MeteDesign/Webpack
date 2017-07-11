import _ from 'lodash'
import moment from 'moment'
import './style.css'
import {cube} from './treeshaking.js'
import logo from './assets/images/logo.png'
import './test.scss'

console.log(cube(5)) // 125
function nousefull () {
  console.log('not usefull!')
  console.log('you will not see this if tree shaking is worked')
}

function component () {
  let ele = document.createElement('div')
  ele.innerHTML = _.join(['Hello Mete Design Webpack V3.1 ', '<br/>', 'Mete Design Group', '<br/>'], ' ')
  ele.classList.add('hello')

  let time = document.createElement('span')
  time.innerHTML = moment().format()
  time.id = 'time'
  time.classList.add('time')
  time.onload =
    window.setInterval(() => {
      document.getElementById('time').innerHTML = moment().format()
    }, 500)

  let img = new Image()
  img.src = logo
  img.classList.add('img')
  ele.appendChild(time)
  ele.appendChild(img)
  return ele
}

document.body.appendChild(component())
