import React, { useState } from 'react';
import {
  Input,
  Button,
  Form,
  Row,
  Col,
  Typography,
  message
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Home from './Home';

const { Title } = Typography;

/**
 * Component that returns login form.
 * @component
 * @returns {Element} react form.
 */
const Login = () => {
  const [form] = Form.useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = 'admin';
  const pass = 'seguridad'

  /**
   * Function that dispatch user data to login
   * @param {Object} data Object with form data
   */
  const onSubmit = (data) => {
    if (data.user_name === user && data.password === pass) {
      setIsLoggedIn(true);
    } else {
      message.warning('Usuario o contraseña invalida');
    }
  };

  const LoginForm = () => (
    <div className="bg-login">
      <Row>
        <Col
          className="gutter-row mx-auto"
          xs={{ span: 20 }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
        </Col>
      </Row>
      <div className="login-container">
        <Row>
          <Col
            className="gutter-row mx-auto login-column"
            xs={{ span: 14 }}
            sm={{ span: 14 }}
          >
            <Row>
              <Col xs={{ span: 20 }} md={{ span: 10 }} lg={{ span: 10 }} className="mx-auto">
                <Title level={4}>Inicia sesión</Title>
                <Form
                  form={form}
                  className="login-form"
                  onFinish={onSubmit}
                  autoComplete="on"
                >
                  <Form.Item
                    name="user_name"
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Ingrese usuario"
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: 'Por favor ingrese su contraseña' },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Contraseña"
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      size="large"
                    >
                      Ingresar
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );

  return (
    <>
      {isLoggedIn ? <Home /> : <LoginForm />}
    </>
  );
};

Login.propTypes = {
  /**
   * Object with error code and status
   */
  error: PropTypes.object.isRequired,
  /**
 * Function that dispatch data from form
 */
  loginUser: PropTypes.func.isRequired,
};

export default Login;
