import React, { FormEvent, useState } from 'react';
import './EventDetails.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { initialState } from 'service/state';
import { months } from 'common/constants';
import { Event } from 'types/types';
import { InputRadio } from 'components/inputRadio/InputRadio';

export const EventDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state as { event: Event };
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const eventDate = new Date(`${event.date} ${event.time}`);
  const month = eventDate.getMonth();
  const day = eventDate.getDate();

  const setChackedRadio = (e: FormEvent<HTMLInputElement>) => {
    setChecked(true);
    setValue(() => (e.target as HTMLInputElement).value);
  };

  const onSubmit = () => {
    initialState.value = value;
    initialState.eventState = event;
    initialState.isSuccessful = true;
    navigate('/');
  };

  return (
    <section className="details">
      <h1 className="details-title">{`${event.team1} - ${event.team2}`}</h1>
      <div className="details-date">{`${day} ${months[month]} ${event.time.slice(0, -3)}`}</div>
      <form className="details-form">
        <div className="details-radio">
          <InputRadio
            id="win1"
            value={`${event.team1} ${event.win1}`}
            content={event.team1}
            coef={event.win1}
            onChange={(e) => setChackedRadio(e)}
          />
          <InputRadio
            id="draw"
            value={`Ничья ${event.draw}`}
            content="НИЧЬЯ"
            coef={event.draw}
            onChange={(e) => setChackedRadio(e)}
          />
          <InputRadio
            id="win2"
            value={`${event.team2} ${event.win2}`}
            content={event.team2}
            coef={event.win2}
            onChange={(e) => setChackedRadio(e)}
          />
        </div>
        <button
          type="button"
          disabled={checked ? false : true}
          onClick={() => onSubmit()}
          className="details-button"
        >
          Сделать ставку
        </button>
      </form>
    </section>
  );
};
