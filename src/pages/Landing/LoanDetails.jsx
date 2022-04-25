import React from 'react';
import styled from 'styled-components';

// Icons
import bill from '../../images/payment-method.png';
import debt from '../../images/debt.png';
import car from '../../images/car.png';

function LoanDetails() {
  return (
    <StyledLoanDetails>
      <div className='loan'>
        <h2>Loan details</h2>

        <div className='details'>
          <h3>Amounts from:</h3>
          <span>$50 USD - $300 USD</span>
        </div>

        <div className='details'>
          <h3>Rates starting from:</h3>
          <span>29.99%</span>
        </div>

        <div className='details'>
          <h3>Terms from:</h3>
          <span>2-6 months</span>
        </div>
      </div>
      <hr />
      <div className='use-case'>
        <h3>Most commonly used for:</h3>
        <div className='grid'>
          <div className='icon'>
            <img src={bill} alt='Bill Payments' />
            <h4>Bill Payments</h4>
          </div>
          <div className='icon'>
            <img src={debt} alt='Debt Consolidation' />
            <h4>Debt Consolidation</h4>
          </div>

          <div className='icon'>
            <img src={car} alt='Auto Repairs' />
            <h4>Auto Repairs</h4>
          </div>
        </div>
      </div>
    </StyledLoanDetails>
  );
}

const StyledLoanDetails = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.skyBlue};

  .loan {
    width: 50%;
    padding: 60px;

    h2 {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .details {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
      padding-bottom: 10px;
      margin-bottom: 10px;

      h3 {
        font-size: 1.3rem;
        font-weight: 500;
      }

      span {
        font-weight: 900;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
  hr {
    border-right: 1px solid ${({ theme }) => theme.colors.blue};
    margin: 60px 0;
  }

  .use-case {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    h3 {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 1.6rem;
      margin-bottom: 20px;
    }

    .grid {
      display: flex;
      justify-content: space-around;
      width: 100%;

      .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 100px;
        }

        h4 {
          font-weight: 600;
          color: ${({ theme }) => theme.colors.blue};
          margin-top: 15px;
        }
      }
    }
  }
`;
export default LoanDetails;
