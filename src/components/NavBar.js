import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, HomeOutlined, QuestionOutlined, AlertOutlined   } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (

      <div className="font-link"> 
        <div className="menu">
          <Menu  mode="horizontal" className="justify-content-center align-items-center">
            <Menu.Item key="home" className="d-flex align-items-center"  icon={<HomeOutlined className="text-white" />}>
              <Link to="/" className="pt-3 text-white">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" className="d-flex align-items-center"  icon={<QuestionOutlined className="text-white"/>}>
              <Link to="/aboutme  " className="pt-3 text-white">About Me</Link>
            </Menu.Item>
            
            <Menu.Item key="project" className="d-flex align-items-center"  icon={<AlertOutlined className="text-white"/>}>
              <Link to="/projects" className="pt-3 text-white">Projects</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
      
    
  );
}