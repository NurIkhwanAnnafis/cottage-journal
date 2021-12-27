import { DownOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import './index.scss'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const index = (props) => {
  const { collapsed, setCollapsed } = props;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p>Welcome Ikhwan</p>
      </Menu.Item>
      <Menu.Item key="1">
        <p>Setting Profile</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <p>Logout</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 50px 0 16px' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-block d-sm-none">
            <Button type="text" onClick={() => setCollapsed(!collapsed)} style={{ color: 'white' }}>
              <MenuUnfoldOutlined />
            </Button>
          </div>
          <img width={32} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo" />
          <h5 className="ms-2 text-white">React</h5>
        </div>
        <div>
          <Avatar size={48} icon={<UserOutlined  />} className="me-3"/>
          <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" overlayClassName="custom-dropdown-profile">
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default index;