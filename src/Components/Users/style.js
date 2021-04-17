import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 25%;
  background: #fff;
  margin: 10px 10px;
  align-items: center;
  padding: 10px 0;
  border-radius: 10px;
  border-bottom: 1px solid #ebebeb;

  .row{
    margin: 5px 0; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .row-text{
    margin: 0 2px; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .bold-15 {
    margin: 0 2%;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    font-family: Roboto;
  }

  .icon-box {
    background: #f7f7f7;
    height: 35px;
    width: 35px;
    border-radius: 200px;
    display: flex;
    span {
      margin: auto;
      svg {
        height: 15px;
        width: 20px;
      }
    }
  }
  .icon-text {
      display: flex;
      flex-flow: column;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      font-family: Roboto;
      margin-top: 3px;
    }

  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 30px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .button1 {
    background-color: #55ccc1; 
    color: white;
  }

  .company-icon{
    background-color: #C0C0C0;
    margin-top: 10%;
    padding: 20%; 
  }
`;
