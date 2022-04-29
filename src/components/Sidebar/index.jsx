import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faYoutube, faSkype, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="bg-[#181818] w-[60px] h-full absolute top-0 z-[3] m-h-125">
    <Link to="/" className="block py-2 px-0">
      <img src={LogoS} alt="logo" className="block my-2 mx-auto w-6 h-auto" />
      <img
        src={LogoSubtitle}
        alt="slobodan"
        className="block my-2 mx-auto h-auto w-[50px]"
      />
    </Link>
    <nav className='block text-center absolute h-[210px] top-1/2 mt-[-120px] w-full'>
        <NavLink className="nav-link group after:tracking-[2px]" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon className='group-hover:opacity-0' icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink className="nav-link group after:content-['APROPOS'] after:tracking-[2px]" exact="true" activeclassname="active" to="/about">
            <FontAwesomeIcon className="group-hover:opacity-0" icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink className="nav-link  after:content-['CONTACT'] group after:tracking-[2px]" exact="true" activeclassname="active" to="/contact">
            <FontAwesomeIcon className="group-hover:opacity-0" icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul 
      className="absolute bottom-5 w-full block p-0 list-none text-center
        m-0 py-[7px]> px-0> rs-link">
    <li>
        <a href="https://github.com/Ulrich15"
          target="_blank"
          rel="noreferer"
          >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/MbounaU"
          target="_blank"
          rel="noreferer"
          >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
        <li>
        <a href="https://www.facebook.com/ulrich.mbouna"
          target="_blank"
          rel="noreferer"
          >
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ulrich-mbouna"
          target="_blank"
          rel="noreferer"
          >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="skype:live:mbounaulrich"
          target="_blank"
          rel="noreferer"
          >
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
