import 'semantic-ui-css/semantic.min.css';
import bureau from '../../../assets/images/bureau.jpg';

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleImageCard = () => (
  <Card>
    <Image src={bureau} wrapped ui={false} />
    <Card.Content>
      <Card>Conseils en investissements boursiers</Card>
      <Card.Meta></Card.Meta>
      <Card.Description>
       Profitez de notre expertise afin d'investir sur les marchés financiers
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard