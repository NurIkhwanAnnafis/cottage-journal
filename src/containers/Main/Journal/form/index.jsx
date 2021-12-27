import React from 'react';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
  Upload,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const prefixSelector = (
  <Select style={{ width: 70 }} value="Rp">
    <Option value="Rp">Rp</Option>
  </Select>
);

const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

const FormAdmin = (props) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="adminForm"
      layout='vertical'
      onFinish={props.onFinish}
      // initialValues={}
      scrollToFirstError
    >
      <div className='row'>
        <div className='col-md-6 col-12 border'>
          <h5>Saldo Masuk</h5>
          <Form.Item
            name="tanggal_masuk"
            label="Tanggal"
            {...config}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="Jumlah"
            label="jumlah_masuk"
            rules={[{ required: true, message: 'Tolong masukan jumlah!', whitespace: true }]}
          >
            <InputNumber addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Bukti">
            <Form.Item name="bukti_masuk" valuePropName="fileList" noStyle>
              <Upload.Dragger name="files_in" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </div>
        <div className='col-md-6 col-12 border'>
          <h5>Saldo Keluar</h5>
          <Form.Item
            name="tanggal_masuk"
            label="Tanggal"
            {...config}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="Jumlah"
            label="jumlah_masuk"
            rules={[{ required: true, message: 'Tolong masukan jumlah!', whitespace: true }]}
          >
            <InputNumber addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Bukti">
            <Form.Item name="bukti_keluar" valuePropName="fileList" noStyle>
              <Upload.Dragger name="files_out" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </div>
      </div>
      <br />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Posting
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormAdmin;