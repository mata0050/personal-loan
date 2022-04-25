import React from 'react';
import styled from 'styled-components';

// CSS
import { Button } from '../../css/Button.styled';

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
    </StyledHero>
  );
}

const StyledHero = styled.div``;
export default Hero;
