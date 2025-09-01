import React from 'react';
import styled from 'styled-components';

const Button = ({ checked = false, onChange, onClick, shrink = false }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className={`toggle ${shrink ? 'shrinking' : ''}`}>
          <input type="checkbox" checked={checked} onChange={onChange} onClick={onClick} aria-label="toggle-indicator" />
          <span className="button" />
          <span className="label">☼</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .toggle {
    display: inline-block;
  }

  .toggle {
    position: relative;
    height: 40px;
    width: 40px;
  }

  .toggle:before {
    content: "";
    box-shadow: 0;
    border-radius: 40px;
    background: #ffffff;
    position: absolute;
    margin-left: -18px;
    margin-top: -18px;
    opacity: 0.25;
    height: 36px;
    width: 36px;
    left: 50%;
    top: 50%;
  }

  .toggle input:checked~.label {
    color: rgba(0, 0, 0, 0.9);
  }

  .toggle .button {
    transition: all 220ms cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 8px 14px -4px rgba(0, 0, 0, 0.4), inset 0 -2px 3px -1px rgba(0, 0, 0, 0.2), 0 -6px 10px -1px rgba(255, 255, 255, 0.6), inset 0 2px 3px -1px rgba(255, 255, 255, 0.2);
    border-radius: 28px;
    position: absolute;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    margin-left: -20px;
    margin-top: -20px;
    display: block;
    height: 40px;
    width: 40px;
    left: 50%;
    top: 50%;
    transform: scale(1); /* بارز افتراضياً */
  }

  .toggle .label {
    transition: color 300ms ease-out;
    line-height: 40px;
    text-align: center;
    position: absolute;
    font-weight: 700;
    font-size: 16px;
    display: block;
    opacity: 0.9;
    height: 100%;
    width: 100%;
    color: rgba(0, 0, 0, 0.9); /* keep icon black */
  }

  .toggle input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    height: 100%;
    width: 100%;
    left: 0;
  /* نمط تقليص يُستخدم لحالات خاصة إن أردنا إجبار التصغير برمجياً */
  .toggle.shrinking .button { transform: scale(0.92); }

    top: 0;
  }

  .toggle input:active ~ .button {
    filter: none;
    box-shadow: none;
  }

  .toggle input:active ~ .label {
    font-size: 26px;
    color: rgba(0, 0, 0, 0.45);
  }

  /* عند الضغط يتضائل الزر مؤقتاً */
  .toggle input:active ~ .button { transform: scale(0.92); }


  .toggle input:checked ~ .button {
    filter: none;
    box-shadow: none;
  }

  .toggle input:checked ~ .label {
    color: rgba(0, 0, 0, 0.8);
  }`;

export default Button;