import React from 'react';

import { Container, Category, AddCategoryIcon, /* ChannelButton */ } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon/>
      </Category>

      {/*  <ChannelButton channel-name="chat-livre"/>
        <ChannelButton channel-name="chat-fechado"/>
        <ChannelButton channel-name="chat-parcialmente fechado"/>
        <ChannelButton channel-name="chat-totalmente fechado"/> */}
    </Container>
  );
}

export default ChannelList;