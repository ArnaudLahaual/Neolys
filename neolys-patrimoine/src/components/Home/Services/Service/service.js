import './service.scss';
import data from '../../../../data/services.js';

function Service( {title, texte}) {

    return (
        <div className="services" id='services'>
        <div className="services__grille">

            <div className='services__card'>
                
                <div className='services__card__entete'>
                <h2 className='services__card__entete__title'>{title}</h2>
                </div>

                <div className='services__texte'>
                <p className='services__texte__p'>{texte}</p>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Service;