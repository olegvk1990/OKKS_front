import React from 'react'
import './styles/App.sass'
import './styles/App.less'
import {BrowserRouter as Router,Link} from "react-router-dom"
import {useRoutes} from './components/hooks/routes.hook'
import { useSocket } from './components/hooks/socket.hook'
import { YMInitializer } from 'react-yandex-metrika';
import {connect} from 'react-redux'
import {Layout} from 'antd'
import 'antd/dist/antd.css'
import Header from './components/Header/Header'

import Menu from './components/Menu/Menu'


const {Content, Footer, Sider } = Layout

function App({structure}) {

  const routes = useRoutes({structure})
  const {socket,initApp} = useSocket()
  console.log(structure)
  initApp()





  return (
    <div className="App">
    <YMInitializer
      accounts={[65379667,65506843]}
      options={{webvisor: true}}
    />

      <Router>
        <Header text={'Сервис находится в разработке'}/>
        <Layout style={{minHeight: '100vh'}}>
          <Sider style={{minWidth: '300px', paddingTop: '120px'}}>
            <Menu structure={structure}/>
          </Sider>
          <Layout className="site-layout">


              
            
              <Content style={{ margin: '0 16px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb> */}
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {routes}
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center', fontSize: '9px' }}>OKKS ©2018 Created by Kuz.Team</Footer>
        </Layout>
           
        </Layout>

      </Router>
  
    </div>
  );
}

const mapStateToProps = state => {
  return {
    structure: state.ui.menu
  }
}





export default connect(mapStateToProps)(App)
