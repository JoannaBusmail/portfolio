import '../styles/components/Header.scss';
import Logo from '../images/Logo.png';
import LogoFooter from '../images/logo_footer.png';
import pdf from '../images/CV - Joanna Busmail - ESP.pdf';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll/modules';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='header__menu'>
          <li>
            {/*<a title='about' className='header__menu--link' href='/about'>
              About
            </a>*/}
            <LinkScroll
              className='header__menu--link'
              to='about'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              className='header__menu--link'
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </LinkScroll>
          </li>
          <li>
            <img className='header__menu--img' src={LogoFooter} />
          </li>
          <li>
            <LinkScroll
              className='header__menu--link'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </LinkScroll>
          </li>
          <li>
            <a
              title='Resume'
              className='header__menu--link'
              href={pdf}
              rel='noopener noreferrer'
              download='CV - Joanna Busmail - ESP.pdf'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
