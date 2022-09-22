import '../styles/components/About.scss';

const About = () => {
  return (
    <section>
      <a name='about'></a>
      <div className='container_img'>
        <div className='container_about'>
          <h2 className='about_title about_title--one'>Hi!</h2>
          <h2 className='about_title about_title--two'>Hi!</h2>

          <h2 className='about about__subtitle'>I'm Joanna</h2>
          <p className='about about__content'>
            I'm new as Frontend developer and I have gone a long way as a
            producer. I have a diverse set of skills. Please take a look and get
            in touch, let's share a virtual beer!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
