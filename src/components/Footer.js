import LogoFooter from '../images/logo_footer.png';
import Logo from '../images/Logo.png';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <div className='footer__container'>
      <nav className='icons__container'>
        <div className='icon__border'>
          <a
            title='llamar por teléfono'
            href={`tel:+34629738987 `}
            target='_blank'
          >
            <i className='fa-solid fa-mobile-screen-button icon__border--item'></i>
          </a>
        </div>

        <div className='icon__border'>
          <a
            title='enviar email'
            href={`mailto:joanna.busmail@gmail.com`}
            target='_blank'
          >
            <i className='fa-solid fa-envelope icon__border--item'></i>
          </a>
        </div>
        <div className='icon__border'>
          <a
            href='https://www.linkedin.com/in/joanna-busmail/'
            target='_blank'
            title='ir a perfil de Linkedin'
          >
            <i className='fa-brands fa-linkedin-in icon__border--item'></i>
          </a>
        </div>
        <div className='icon__border'>
          <a
            href='https://github.com/JoannaBusmail'
            target='_blank'
            title='ir a perfil de Github'
          >
            <i className='fa-brands fa-github-alt icon__border--item'></i>
          </a>
        </div>
      </nav>
      <img className='footer__img' src={Logo} />

      <a className='mail_text' href={`mailto:joanna.busmail@gmail.com`}>
        joanna.busmail@gmail.com
      </a>
    </div>
  );
};

export default Footer;
