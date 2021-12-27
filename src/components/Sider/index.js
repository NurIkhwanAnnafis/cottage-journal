import { Drawer, Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;
import {
  DesktopOutlined,
} from '@ant-design/icons';
import { Fragment, useState } from "react";
import { sidebarMenus } from "../../configs/menus";
import { useNavigate } from "react-router-dom";
const { SubMenu } = Menu;

const defaultIcon = <DesktopOutlined />
const index = (props) => {
  const { collapsed, isMobile, setCollapsed } = props;
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sider style={{ height: '100vh', paddingTop: 64 }} className="d-none d-sm-block">
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {sidebarMenus.map(val => val.subrute.length === 0 ? (
            <Menu.Item key={val.path} icon={val.icon || defaultIcon} onClick={() => navigate(val.path)}>
              {val.name}
            </Menu.Item>
          ): (
            <SubMenu key={val.path} icon={val.icon || defaultIcon} title={val.name}>
              {val.subrute.map(detail => (
                <Menu.Item key={detail.path} onClick={() => navigate(detail.path)}>{detail.name}</Menu.Item>
              ))}
            </SubMenu>  
          ))}
        </Menu>
      </Sider>

      {isMobile && (
        <Drawer
          placement="left"
          closable={false}
          onClose={() => setCollapsed(false)}
          visible={collapsed}
          key="left"
          bodyStyle={{ background: '#001529' }}
          width={300}
        >
          <div className="d-flex justify-content-center mb-4">
            <img width={32} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo" />
            <h5 className="ms-2 text-white">React</h5>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {sidebarMenus.map(val => val.subrute.length === 0 ? (
              <Menu.Item key={val.path} icon={val.icon || defaultIcon} onClick={() => navigate(val.path)}>
                {val.name}
              </Menu.Item>
            ): (
              <SubMenu key={val.path} icon={val.icon || defaultIcon} title={val.name}>
                {val.subrute.map(detail => (
                  <Menu.Item key={detail.path} onClick={() => navigate(detail.path)}>{detail.name}</Menu.Item>
                ))}
              </SubMenu>  
            ))}
          </Menu>
        </Drawer>
      )}
    </Fragment>
  )
}

export default index;