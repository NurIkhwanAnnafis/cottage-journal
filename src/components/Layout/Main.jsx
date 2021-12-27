import React, { Fragment, useEffect, useState } from 'react'
import Sider from '../Sider'
import Header from '../Header'
import Content from '../Content'
import { Layout } from 'antd'

const Main = (props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    addEventListener('resize', handleCheckMobile())
  })

  const handleCheckMobile = () => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  }

  return (
    <Layout>
      <Header isMobile={isMobile} collapsed={collapsed} setCollapsed={setCollapsed} />
      <Sider isMobile={isMobile} collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content {...props}>
        {children}
      </Content>
    </Layout>
  )
}

export default Main;