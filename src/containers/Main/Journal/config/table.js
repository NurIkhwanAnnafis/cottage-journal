import { Button } from "antd";
import moment from "moment";
import { currency } from "../../../../utils/helper";

export const columns = (
  callback = () => {}
) => [
  {
    title: 'Masuk',
    dataIndex: 'masuk',
    key: 'masuk',
    className: 'text-center',
    children: [
      {
        title: 'Tanggal',
        dataIndex: 'tanggal_masuk',
        key: 'tanggal_masuk',
        render: text => <a>{moment(text).format('DD MMMM YYYY')}</a>,
      },
      {
        title: 'Kwitansi/Bukti',
        dataIndex: 'bukti_masuk',
        key: 'bukti_masuk',
        render: () => (
          <Button type="link" onClick={() => callback('')}>
            buka bukti
          </Button>
        )
      },
      {
        title: 'Jumlah',
        dataIndex: 'jumlah_masuk',
        key: 'jumlah_masuk',
        render: text => <a>{currency({ value: text })}</a>,
      },
    ]
  },
  {
    title: 'Keluar',
    dataIndex: 'keluar',
    key: 'keluar',
    className: 'text-center',
    children: [
      {
        title: 'Tanggal',
        dataIndex: 'tanggal_keluar',
        key: 'tanggal_keluar',
        render: text => <a>{moment(text).format('DD MMMM YYYY')}</a>,
      },
      {
        title: 'Kwitansi/Bukti',
        dataIndex: 'bukti_keluar',
        key: 'bukti_keluar',
        render: () => (
          <Button type="link" onClick={() => callback('')}>
            buka bukti
          </Button>
        )
      },
      {
        title: 'Jumlah',
        dataIndex: 'jumlah_keluar',
        key: 'jumlah_keluar',
        render: text => <a>{currency({ value: text })}</a>,
      },
    ]
  },
];

export const data = [
  {
    tanggal_masuk: '2022-12-27 00:00:00',
    bukti_masuk: null,
    jumlah_masuk: 1000000,
    tanggal_keluar: '2022-12-31 00:00:00',
    bukti_keluar: null,
    jumlah_keluar: 1000000,
  }
];