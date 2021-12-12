import logo from './logo.svg';
import './App.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, HomeOutlined, QuestionOutlined, AlertOutlined  } from '@ant-design/icons';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

      <Router>
          <NavBar />
          <Routes>
            <Route exact path="/personal-web-portfolio" element={<Home />} />
            <Route exact path="/personal-web-portfolio/aboutme" element={<About />} />
            <Route exact path="/personal-web-portfolio/projects" element={<Projects />} />
          </Routes>
      </Router>
     
  );
}

export default App;
 