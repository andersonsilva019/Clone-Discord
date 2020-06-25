import React from 'react';

import { Container, ServerButton, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator/>

      <ServerButton/>
      <ServerButton hasNotification/>
      <ServerButton mentions={3} />
      <ServerButton/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton hasNotification/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton mentions={4}/>
      <ServerButton/>
    </Container>
  );
}

export default ServerList;