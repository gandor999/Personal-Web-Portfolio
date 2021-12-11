import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, HomeOutlined, QuestionOutlined, AlertOutlined   } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export default function Home() {
  return (

      <div className="font-link">
        <header className="page-cloud-bg hello justify-content-center flex-column text-center p-2">
          <section className="d-flex justify-content-center mb-4 p-3">
            <div className="pr-4">
              <h1 className="welcome">
                Welcome
              </h1>
            </div>
            <div className="">
              <p className="">
                To Geodor's web portfolio
              </p>
            </div>
          </section>
          
          <section className="mt-4">
            <p>Take a look at the stuff he's done <Link to="/projects">here</Link></p>
            <p>or about <Link to="/aboutme">him</Link></p>
          </section>
        </header>  
      </div>
      
    
  );
}

