// 在这个地方引入按需加载的组件
// lazyload components here
import React from 'react'
import Home from 'bundle-loader?lazy&name=Home!../pages/index'
import Sub1 from 'bundle-loader?lazy&name=Sub1!../pages/page1/subs/sub1'
import Sub2 from 'bundle-loader?lazy&name=Sub1!../pages/page1/subs/sub2'

import Bundle from '../components/lazyload'
const loadComponent = (Component) => () => (
  <Bundle load={Component}>
    {
              (Component) => Component ? <Component /> : <div style={{height: '100vh', backgroundColor: '#333'}}>正在加载</div>
          }
  </Bundle>
  )
const nav = [
  {
    title: 'Index Page',
    route: '/',
    component: loadComponent(Home)
  },
  {
    title: 'Page1',
    route: '/page1',
    child: [
      {
        title: 'Sub1',
        route: '/page1/sub1',
        component: loadComponent(Sub1)
      }, {
        title: 'Sub2',
        route: '/page1/sub2',
        component: loadComponent(Sub2)
      }
    ]
  }
]
export default nav
