import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 25%;
  margin-top: 10px;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #ebebeb;
  background-image: repeating-linear-gradient(-45deg,
    #b2d8d8,
    #b2d8d8 40px,
    white 40px,
    white 80px);
  background-image: repeating-linear-gradient(-45deg,
    #b2d8d8 0 40px,
    white 40px 80px);

  

  .row{
    display: flex;
    justify-content: space-between;
  }



  .bold-15 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    font-family: Roboto;
  }

  .icon-box {
    height: 35px;
    width: 35px;
    span {
      margin: auto;
      svg {
        height: 35px;
        width: 35px;
      }
    }
  }

  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 8px 16px;
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
    background-color: white; 
    color: black; 
    border: 2px solid #ce1f6a;
  }

  .button1:hover {
    background-color: #ce1f6a;
    color: white;
  }

  .button2 {
    background-color: #ce1f6a; 
    color: white; 
  }



`;
