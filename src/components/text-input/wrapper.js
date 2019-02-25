import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;  
  box-sizing: border-box;  
  height: ${({theme}) => theme.size === 'normal' ? '40px' : '48px'};
  margin: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 15px;
  user-select: none;  
  
  .right-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
  }  
`;

export default Wrapper
