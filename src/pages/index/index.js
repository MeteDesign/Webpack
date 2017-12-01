import React from 'react'
import {Button} from 'antd'
export default class Home extends React.Component {
  scrollTo (tar) {
    var tar_dom = document.getElementById(tar)
    var _offsetParet = tar_dom.offsetParent
    var top = tar_dom.offsetTop
    while (_offsetParet) {
      top += _offsetParet.offsetTop
      _offsetParet = _offsetParet.offsetParent
    }
  }
  componentDidMount () {

  }

  render () {
    return (
      <div >
        <Button>Index</Button>
      </div>
    )
  }
}
