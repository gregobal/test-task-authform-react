import styled from 'styled-components'

const Input = styled.input`    
  width: 100%;
  text-align: left;
  padding: ${({theme}) => theme.size === 'normal' ? '8px' : '12px'} 12px;
  color: ${({theme}) => theme.color};
  background-color: ${({filled, theme}) => filled ?
    theme.background.filled :
      theme.background.empty };
  border: 1px solid transparent;
  border-radius: 2px;
  border-bottom: 1px solid ${({filled, valid, theme}) =>
    filled && valid ? theme.border.filled :
      valid ? theme.border.valid :
        theme.border.invalid};  
    
  :hover {
    background-color: ${({theme}) => theme.hover.background};
    border-bottom: 1px solid ${({theme}) => theme.hover.border};
  }
  
  :focus {
    outline: none;
    background-color: ${({theme}) => theme.focus.background};
    border-bottom: 2px solid ${({valid, theme}) => 
      valid ? theme.focus.border.valid :
        theme.focus.border.invalid};
  }
  
  :active {
    outline: none;    
  }
  
  :disabled {
    color: #F8F8F8;
    border-bottom: 1px solid ${({theme}) => theme.disabled.border};    
    background-color: ${({theme}) => theme.disabled.background};        
  }
  
  ::-ms-clear {
    display: none;
  }
`;

export default Input
