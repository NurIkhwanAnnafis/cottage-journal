import { Breadcrumb, Layout, Menu } from "antd";
import { useLocation } from "react-router-dom"

const {  Content } = Layout;
const { SubMenu } = Menu;

const index = (props) => {
  const location = useLocation();
  const { children, breadcrumb } = props;

  return (
    <Layout className="vh-100">
      <Content>
        <div className="container" style={{ marginTop: 64 }}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {breadcrumb.map(val => (
              <Breadcrumb.Item>{val}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <br />
          {children}
        </div>
      </Content>
    </Layout>
  )
}

export default index;