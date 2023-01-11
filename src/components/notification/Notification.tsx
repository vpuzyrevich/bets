import React, { FC } from 'react';
import './Notification.scss';

export const Notification: FC<{ matchGame: string; bet: string }> = ({ matchGame, bet }) => {
  return (
    <div className="notification">
      Спасибо, ваша ставка
      <span className="notification-span">{`${matchGame}, ${bet}`}</span>
      принята
    </div>
  );
};
