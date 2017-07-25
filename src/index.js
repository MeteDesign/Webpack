import React from 'react'
import {render} from 'react-dom'
import './style.css'

function nousefull () {
  console.log('not usefull!')
  console.log('you will not see this if tree shaking is worked in production env')
}
const Index = () => (
  <div className='md-container'>
    <h2>Mete Design Webpack V3</h2>
    <h4>Thanks for using</h4>
    <h4>Github Repo: <a target='_blank' href='https://github.com/MeteDesign/Webpack'>MeteDesign/Webpack</a></h4>
    <h3>Contributors: <a target='_blank' href='https://github.com/godotdotdot'>GoDotDotDot</a></h3>
    <hr />
    <img src={require('./assets/images/logo.png')} alt='logo' />
    <h4>METE DESIGN GROUP</h4>
    <img src={require('./assets/images/md.png')} alt='md' style={{width: 85, height: 85}} />
  </div>
)

render(<Index />, document.getElementById('root'))
