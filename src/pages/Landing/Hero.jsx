import React from 'react';
import styled from 'styled-components';

// CSS
import { Button } from '../../css/Button.styled';
import heroImage from '../../images/hero.png';

function Hero() {
  return (
    <StyledHero>
      <div className='content'>
        <h1>Personal Loans</h1>
        <p>
          When banks aren’t an option, we can help you get a personal loan from
          $50 up to $300. We offer personalized products and affordable payment
          plans with terms up to 3 months designed to fit your unique needs and
          budget.
        </p>

        <Button
          bg={({ theme }) => theme.colors.blue}
          color={({ theme }) => theme.colors.white}
        >
          APPLY NOW
        </Button>
      </div>
      <img src={heroImage} alt='' />
    </StyledHero>
  );
}

const StyledHero = styled.div`
  display: flex;
  height: 500px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 60px;
    width: 50%;

    h1 {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 2.5rem;
      margin: 0 0 20px;
    }

    button {
      margin-top: 20px;
      width: 150px;
    }
  }

  img {
    width: 50%;
    object-fit: contain;
    background-color: #d3e7f8;
  }
`;
export default Hero;
