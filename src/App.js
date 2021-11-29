import logo from './logo.svg';
import './App.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, HomeOutlined, QuestionOutlined, AlertOutlined   } from '@ant-design/icons';

function App() {
  return (

      <div >
        <div>
          <Menu  mode="horizontal" className="justify-content-center">
            <Menu.Item key="mail" icon={<HomeOutlined style={{ display: 'inline-block', verticalAlign: 'middle' }} />}>
              Home
            </Menu.Item>
            <Menu.Item key="app" icon={<QuestionOutlined  />}>
              About Me
            </Menu.Item>
            
            <Menu.Item key="app" icon={<AlertOutlined   />}>
              Projects
            </Menu.Item>
          </Menu>
        </div>

        <header className="page-cloud-bg">
          
        </header>
        
      </div>
      
    
  );
}

export default App;
 