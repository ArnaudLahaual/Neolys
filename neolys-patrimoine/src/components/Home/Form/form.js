import './form.scss';
import {MdContactMail} from 'react-icons/md';

function Form() {

  return (
    <div className="registration" id='contacts'>

        <h1 className='registration__form__title '><MdContactMail />Formulaire de Contacts</h1>
    
        <form className='registration__form'>

          {/* Nom */}
            <label className='registration__form__label'>
                Nom* 
                <input
                className="registration__form__field" 
                type="text"
                name="lastname"
                placeholder='Votre nom'
                required="required"
                />
            </label>

            {/* Prénom */}
              <label className='registration__form__label'>
                Prénom*
                <input
                className="registration__form__field" 
                type="text"
                name="firstname"
                placeholder='Votre prénom'
                required="required"
                />
            </label>

              {/* Email */}
              <label className='registration__form__label'>
                Email*
                <input
                className="registration__form__field" 
                type="mail"
                name="mail"
                placeholder='Votre email'
                required="required"
                />
            </label>

              {/* Téléphone */}
              <label className='registration__form__label'>
                Téléphone*
                <input
                className="registration__form__field" 
                type="tel"
                name="tel"
                placeholder='Votre téléphone'
                required="required"
                />
            </label>

            <label className="registration__form__label">Votre message</label>
              <div>
                <textarea
                  className='registration__form__textarea' 
                  placeholder="Veuillez indiquer le contenu de votre message" 
                  name="message"
                />
              </div>

              <button>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                  </div>
                </div>
                <span>Envoyer</span>
              </button>
        </form>
    </div>
  );
}

export default Form;