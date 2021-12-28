import { columns, data } from "./config/table";
import Table from '../../../components/Table/Table'
import { useContext } from 'react';
import { ContextAdmin } from './context/ContextProvider';
import CustomModal from "../../../components/Modal";

const index = (props) => {
  const context = useContext(ContextAdmin);
  const {
    listData,
    setListData,
    showModalBukti,
    setOpenBukti,
    setShowModalBukti
  } = context.useModelAdminList();

  const handleOpenBukti = (val) => {
    console.log('cok')
    setShowModalBukti({ 
      showModal: true,
      detailBukti: {}
     });
  }

  return (
    <div>
      <Table 
        columns={columns(handleOpenBukti)} 
        dataSource={data} 
        title="Journal"
        buttonCreate 
      />
      <CustomModal
        showModal={showModalBukti.showModal}
        setShowModal={setShowModalBukti}
        title="Kwitansi"
      >
        <img src="https://d39otahjdwbcpl.cloudfront.net/wp-content/uploads/2021/09/contoh-kwitansi.png" alt="kwitansi" style={{ width: '-webkit-fill-available' }}/>
      </CustomModal>
    </div>
  )
}

export default index;