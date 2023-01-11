import React, { FC, FormEvent } from 'react';

export const InputRadio: FC<{
  id: string;
  value: string;
  content: string;
  coef: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}> = ({ value, content, coef, onChange, id }) => {
  return (
    <label htmlFor={id} className="details-label">
      <input
        type="radio"
        name="coefficient"
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        className="details-input"
      />
      {content}
      <span className="details-coef">{coef}</span>
    </label>
  );
};
