import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  height: ${({size}) => size === 'normal' ? '40px' : '48px'};  
  margin: 16px;
  padding: ${({size}) => size === 'normal' ? '8px' : '12px'} 12px;   
  color: #FFFFFF;
  background: #6040B0;
  border: none;
  border-radius: 1px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 15px;
  cursor: pointer;
  
  :active {
    outline: none;
    transform: scale(0.99);
  }
  
  :focus {
    outline: none; 
  }
`;

export default Button
