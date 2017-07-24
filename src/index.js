import React from 'react'
import {render} from 'react-dom'
import './style.css'
import './test.scss'

function nousefull () {
  console.log('not usefull!')
  console.log('you will not see this if tree shaking is worked in production env')
}
const Index = () => (
  <div>
    <h3>Thanks for using Mete Design Webpack V3</h3>
    <h4>Github: <a href='https://github.com/MeteDesign/Webpack'>MeteDesign/Webpack</a></h4>
    <img src={require('./assets/images/logo.png')} alt='logo' />
  </div>
)

render(<Index />, document.getElementById('root'))
