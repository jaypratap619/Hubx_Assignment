import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-fow: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  border-bottom: 1px solid #ebebeb;
  background: #fff;

  ul{
      list-style: none;
      display: flex;
  }
  

  ul li{
    display: flex;
    align-items: center;
  }

  ul li a,
  a{
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 768px) {
    ul{
      flex-flow: column;
  }

  .bold-20 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    font-family: Roboto;
  }

  .icon-box,
  .help {
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

  .help {
    background: #55ccc1;
    margin-left: auto;
  }

  .icon-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    font-family: Roboto;
    margin-left: 5px;
  }
`;
