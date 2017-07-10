import _ from 'lodash'
import moment from 'moment'
import './style.css'
import {cube} from './treeshaking.js'
// import avatar from './avatar.jpg'
console.log(cube(5)) // 125
function nousefull () {
  console.log('not usefull')
}

function component () {
  let ele = document.createElement('div')
  ele.innerHTML = _.join(['Hello', 'Webpack', '<br/>', moment().format()], ' ')

  ele.classList.add('hello')

   // 将图像添加到我们现有的 div。
  // var myIcon = new Image()
  // myIcon.src = avatar

  // ele.appendChild(myIcon)
  return ele
}

document.body.appendChild(component())
