import '../styles/components/Header.scss';
import Logo from '../images/Logo.png';
import LogoFooter from '../images/logo_footer.png';
import pdf from '../images/CV - Joanna Busmail - ESP.pdf';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='header__menu'>
          <li>
            <a title='About' className='header__menu--link' href='#about'>
              About
            </a>
          </li>
          <li>
            <a title='Projects' className='header__menu--link' href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <img className='header__menu--img' src={LogoFooter} />
          </li>
          <li>
            <a title='Contact' className='header__menu--link' href='#contact'>
              Contact
            </a>
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
