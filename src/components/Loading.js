
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Loading = (props) => {

  return (
    <div className="center-content">
      <div className="loading-screen">
        <Spin indicator={antIcon} />
      </div>
    </div>
  )
}

export default Loading;