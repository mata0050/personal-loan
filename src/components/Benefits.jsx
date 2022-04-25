import React from 'react';
import styled from 'styled-components';

// Images
import credit from '../images/no_credit_history.jpg';
import personalLoan from '../images/personalLoans_4.jpg';
import webBenefit from '../images/web_benefit_Images_coapp.jpg';

function Benefits() {
  return (
    <StyledBenefits>
      <h2>Benefits of a Personal Loan</h2>

      <FlexWrap>
        <img
          src={webBenefit}
          alt='Happy guys after Fast access to Loan money'
        />

        <div className='content'>
          <h3>Fast access to money</h3>
          <p>Get your money in as little as 2 hours after getting approved.</p>
        </div>
      </FlexWrap>

      <FlexWrap>
        <div className='content'>
          <h3>Flexible loan options</h3>
          <p>
            We offer personalized rates and payment terms to help you find a
            solution that fits your budget. If you’re able, you can pay off your
            loan at any time with no penalty and save the interest. Plus, you
            can get a 2% rate reduction with a co-applicant.
          </p>
        </div>
        <img
          src={personalLoan}
          alt='Men and women applying for a loan with flexible loan options'
        />
      </FlexWrap>

      <FlexWrap>
        <img src={credit} alt='Happy guys after Fast access to Loan money' />

        <div className='content'>
          <h3>Apply without affecting your credit score</h3>
          <p>
            Apply in minutes to find out how much you could qualify for. There
            is no commitment and it won’t affect your credit score.
          </p>
        </div>
      </FlexWrap>
    </StyledBenefits>
  );
}

const StyledBenefits = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  padding: 100px 60px;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.blue};
    text-align: center;
    margin-bottom: 50px;
  }
`;


const FlexWrap = styled.div`
  display: flex;
  margin-bottom: 40px;

  h3,
  img,
  p {
    margin: 0 40px;
  }
  img {
    width: 500px;
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.blue};
  }

  p {
    margin-top: 20px;
    font-weight: 600;
    opacity: 1;
  }
`;


export default Benefits;
