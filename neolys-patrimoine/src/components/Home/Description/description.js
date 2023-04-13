import { NavLink } from 'react-router-dom';
import './description.scss';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';

function Description() {
  return (
    <div className="description" id='description'>
        <p>Nous comprenons que chaque individu a des besoins et des objectifs différents en matière d'investissement et de gestion de patrimoine. C'est pourquoi nous travaillons en étroite collaboration avec nos clients pour comprendre leur situation financière actuelle, leur profil de risque et leurs objectifs à long terme. Nous utilisons ensuite notre expertise et notre expérience pour élaborer un plan d'investissement personnalisé qui répondra à leurs besoins et qui sera en mesure de les aider à atteindre leurs objectifs financiers.
        Notre approche repose sur une philosophie d'investissement à long terme et sur une gestion prudente des risques. Nous croyons que la diversification est la clé pour atteindre des rendements durables à long terme, tout en minimisant les risques. Nous sommes convaincus que la transparence et la communication régulière sont essentielles pour établir une relation de confiance avec nos clients.
        Nous sommes fiers de fournir à nos clients des conseils financiers de qualité, basés sur des recherches solides et une analyse rigoureuse. Nous nous engageons à offrir un service de qualité supérieure et à répondre aux besoins financiers de nos clients de manière efficace et efficiente.
        Nous espérons que vous trouverez notre site web utile et informatif, et que vous n'hésiterez pas à nous contacter si vous avez des questions ou si vous souhaitez obtenir plus d'informations sur nos services.</p>

        <div>
            <NavLink to={"/"}><BsFillArrowLeftCircleFill /> Retour à l'accueil </NavLink>
        </div>
      </div>
  );
}

export default Description;