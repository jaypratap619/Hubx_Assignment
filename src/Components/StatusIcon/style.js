import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background: #fff;
  max-width: 500px;
  margin-left: auto;

  .icon-box {
    padding: 30px 20px;
    svg {
      height: 24px;
      width: 24px;
    }
    .icon-text,
    .icon-count {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      font-family: Roboto;
      margin-top: 3px;
    }
    .icon-count {
      font-size: 18px;
      font-weight: 600;
      margin-top: 5px;
    }
  }
`;
