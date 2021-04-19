import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background: #fff;

  .bold-15 {
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    font-family: Roboto;
  }
  a{
    text-decoration: none;
    color: inherit;
    border-bottom: 3px solid transparent;
  }
  a: hover{
    border-bottom: 3px solid #55ccc1;
  }

  
  .icon-box{
    background: #f7f7f7;
    height: 35px;
    width: 35px;
    border-radius: 200px;
    display: flex;
    span {
      margin: auto;
      svg {
        height: 25px;
        width: 20px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .icon-text{
      display: none;
    }
    .btn{
      border-radius: 10px;
      border: none;
      font-weight: 500;
  }
  }

  .icon-text {
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    font-family: Roboto;
  }

  .borderbtm {
    border-bottom: 3px solid #55ccc1;
  }

  .btn{
      border-radius: 40px;
      border: none;
      font-weight: 500;
  }
`;
