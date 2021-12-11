import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, HomeOutlined, QuestionOutlined, AlertOutlined   } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export default function Home() {
  return (

      <div className="font-link">
        <header className="page-cloud-bg hello justify-content-center flex-column text-center p-2 container-fluid">
          <section className="d-flex justify-content-center mb-4 p-3 flex-column welcome-section">
            <div id="welcome-wrapper" className="rounded-pill container-fluid border border-2 border-dark">
              <h1 className="welcome">
                <strong>Welcome</strong>
              </h1>
            </div>
            <div id="" className="pt-4">
              <p className="home-text">
                To Geodor's web portfolio
              </p>
            </div>
          </section>
          
          <section className="mt-4 home-text p-4">
            <p>Take a look at the stuff he's done <Link to="/projects" className="text-dark">here</Link> or about <Link to="/aboutme" className="text-dark">him</Link></p>
          </section>
        </header>  
      </div>
      
    
  );
}



