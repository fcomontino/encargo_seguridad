import Login from './views/Login';
import 'antd/dist/antd.css';
import './less/app.less';
import image from './images/fondo.jpg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      width: "100%",
      height: "100vh",
    }}>
      <Login />
    </div>
  );
}

export default App;
