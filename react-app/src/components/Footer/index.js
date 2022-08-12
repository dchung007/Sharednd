import { NavLink } from 'react-router-dom';
import githubLogo from '../../images/github.png';
import linkedinLogo from '../../images/linkedIn.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logos">
        <a href="https://github.com/dchung007" target="_blank">
          <img className="logo" src={githubLogo} />
        </a>
      </div>
      <div className='author-div'>
        <div> Created by David Chung</div>
      </div>
      <div className="footer-logos" id="footer-logo-linkedIn">
        <a href="https://www.linkedin.com/in/david-chung-98a5651aa/" target="_blank">
          <img className="logo" src={linkedinLogo} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
