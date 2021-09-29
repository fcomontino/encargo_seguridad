import React from 'react';
import {
  Row,
  Col,
  Typography
} from 'antd';

const { Title } = Typography;

const Home = () => {

  return (
    <div>
      <Row justify="space-around" align="middle">
        <Col style={{ 'margin-top': '450px' }}>
          <Title>Bienvenido</Title>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
