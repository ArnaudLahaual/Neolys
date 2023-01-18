import './form.scss';

function Form() {

  return (
    <div className="registration" id='contacts'>

        <h1 className='registration__form__title '>Formulaire de Contacts</h1>
    
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
                Prénom* :
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
                Email* :
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
                Téléphone* :
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

            <input type="submit" value="Envoyer" />
        </form>
    </div>
  );
}

export default Form;