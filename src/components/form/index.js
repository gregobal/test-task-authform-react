import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 368px;     
  margin: 32px auto;  
  padding: 80px 48px 48px 48px;  
  background: ${({theme}) => theme === 'light' ? '#424242' :
    theme === 'dark' ? '#FFFFFF' :
      '#EEEEEE'};
  outline: ${({theme}) => theme === 'dark' ? '1px solid #EEEEEE' : 'none'};
`;

export default Form
