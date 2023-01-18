import './form.scss';

function Form() {

  return (
    <div className="form" id='contacts'>
    
        <form>
            <label>
                Nom :
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    </div>
  );
}

export default Form;