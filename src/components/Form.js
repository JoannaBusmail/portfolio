import '../styles/components/Form.scss';

const Form = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleInputForm({
      value: ev.target.value,
      name: ev.target.name,
    });
  };
  return (
    <>
      <section id='contact'>
        <fieldset className='form__border'>
          <legend className='form__title'>Contact</legend>
          <form
            className='form__container'
            action='https://formspree.io/f/mqkjprlz'
            method='POST'
          >
            <div className='input__container'>
              <label className='label' htmlFor='name'>
                Name and Last Name
              </label>
              <input
                className='input'
                id='name'
                type='text'
                name='name'
                placeholder='Ej. Mari Carmen del Amor Hermoso'
                required='required'
                onChange={handleInput}
                value={props.formInputs.name}
              ></input>
            </div>
            <div className='input__container'>
              <label className='label' htmlFor='email'>
                E-Mail
              </label>
              <input
                className='input'
                id='email'
                type='email'
                name='email'
                placeholder='Ej. maricarmen@gmail.com'
                required='required'
                onChange={handleInput}
                value={props.formInputs.email}
              ></input>
            </div>
            <div className='input__container'>
              <label className='label' htmlFor='phone'>
                Phone Number
              </label>
              <input
                className='input'
                id='phone'
                type='phone'
                name='phone'
                placeholder='+34 666 666 666'
                onChange={handleInput}
                value={props.formInputs.phone}
              ></input>
            </div>
            <div className='input__container'>
              <label className='label' htmlFor='story'>
                Make my day and tell me anything!
              </label>

              <textarea
                className='input textarea'
                id='story'
                name='story'
                required='required'
                onChange={handleInput}
                value={props.formInputs.story}
              ></textarea>
            </div>
            <div className='input__container'>
              <input className='btn_submit' type='submit' value='Send'></input>
            </div>
          </form>
        </fieldset>
      </section>
    </>
  );
};

export default Form;
