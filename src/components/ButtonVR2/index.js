import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
      <StyledWrapper>
        <div>
          <button className="btn"><i className="animation" />BẮT ĐẦU TRẢI NGHIỆM<i className="animation" />
          </button>
        </div>
      </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    outline: 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: #DC9B49;
    min-width: 200px;
    border: 0;
    border-radius: 100px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
    box-sizing: border-box;
    padding:4px 16px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    overflow: hidden;
    cursor: pointer;
    margin-top: 20px;
  }

  .btn:hover {
    opacity: .95;
    background: #65120C;
  }

  .btn .animation {
    border-radius: 100%;
    animation: ripple 0.6s linear infinite;
  }

  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
    }

    100% {
      box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
    }
  }`;

export default Button;
