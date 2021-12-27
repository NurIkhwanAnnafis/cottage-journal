import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import imageLogin from '../../assets/images/login.png';

const index = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate(`/journal`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="row justify-content-center align-items-center h-100" style={{ background: '#f4f8f9'}}>
      <div className='col-md-6 text-center d-none d-sm-block'>
        <img src={imageLogin} width={700} alt='contractor' style={{ opacity: '60%' }} />
      </div>
      <div className='col-md-6 col-12' style={{ height: 'inherit' }}>
        <div className='container' style={{ marginTop: 100, padding: 80 }}>
          <h1 className="font-weight-bold mb-5 text-center">
            Login Dashboard
          </h1>
          <Form
            form={form}
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <a>Lupa password?</a>
            </Form.Item>

            <Form.Item className='text-center'>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default index
