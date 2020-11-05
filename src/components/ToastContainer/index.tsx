import React from 'react';
import { useTransition } from 'react-spring';

import * as S from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-100%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-100%', opacity: 0 },
    },
  );

  return (
    <S.Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
