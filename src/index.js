import _ from 'lodash'
import './style.css'
import avatar from './avatar.jpg'

function component () {
  let ele = document.createElement('div')
  ele.innerHTML = _.join(['Hello', 'Webpack'], ' ')
  ele.classList.add('hello')

   // 将图像添加到我们现有的 div。
  var myIcon = new Image()
  myIcon.src = avatar

  ele.appendChild(myIcon)
  return ele
}

document.body.appendChild(component())
