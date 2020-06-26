import React, {useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {

  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  },[messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />
        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          content="Aniversário"
        />

        <ChannelMessage 
          author="Anderson Silva"
          date="26/06/2020"
          isBot
          hasMention
          content={
            <>
              <Mention>@Anderson Silva</Mention> Ola mundo
            </>
          }
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #estudo"/>
        <InputIcon/>
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;