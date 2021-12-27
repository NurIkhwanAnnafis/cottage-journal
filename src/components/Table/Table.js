import { Table, Pagination, Input, Space, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const { Search } = Input;

const index = (props) => {
  const { 
    columns, 
    dataSource, 
    onSearch, 
    title,
    buttonCreate,
  } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const handleCreate = () => {
    navigate(`${location.pathname}/create`)
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-7">
          <h4>{title}</h4>
        </div>
        <div className="col-4 col-md-5 d-flex justify-content-end">
          {buttonCreate && <Button type="primary" className="ms-3" style={{ width: 200 }} onClick={handleCreate}>{`Buat`}</Button>}
        </div>
      </div>
      <br />
      <Table columns={columns} dataSource={dataSource} scroll={{ y: 240 }} pagination={false} />
      <br />
      <div className="text-end">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}

export default index;