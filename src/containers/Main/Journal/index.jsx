import { columns, data } from "./config/table";
import Table from '../../../components/Table/Table'
import { useContext } from 'react';
import { ContextAdmin } from './context/ContextProvider';

const index = (props) => {
  const context = useContext(ContextAdmin);
  const {
    listData,
    setListData,
  } = context.useModelAdminList();

  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={data} 
        title="Journal"
        buttonCreate 
      />
    </div>
  )
}

export default index;