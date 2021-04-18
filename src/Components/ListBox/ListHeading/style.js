import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  background: #fff;

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
    margin-left: 5px;
  }
  .button1 {
    background-color: #55ccc1; 
    color: white;
  }

  .headingIcon{
    height: 30px;
    width: 30px;
    margin-right: 5px;
  }
`;
