import styled from 'styled-components'

import themes from './themes';

const Input = styled.input`    
  width: 100%;
  padding: ${({size}) => size === 'normal' ? '8px' : '12px'} 12px;
  color: ${({theme}) => themes[theme].color};
  background-color: ${({filled, theme}) => filled ? 
    themes[theme].background.filled :
      themes[theme].background.empty };
  border: 1px solid transparent;
  border-radius: 2px;
  border-bottom: 1px solid ${({filled, valid, theme}) =>
    filled && valid ? themes[theme].border.filled :
      valid ? themes[theme].border.valid :
        themes[theme].border.invalid};  
    
  :hover {
    background-color: ${({theme}) => themes[theme].hover.background};
    border-bottom: 1px solid ${({theme}) => themes[theme].hover.border};
  }
  
  :focus {
    outline: none;
    background-color: ${({theme}) => themes[theme].focus.background};
    border-bottom: 2px solid ${({valid, theme}) => 
      valid ? themes[theme].focus.border.valid :
        themes[theme].focus.border.invalid};
  }
  
  :active {
    outline: none;    
  }
  
  :disabled {
    color: #F8F8F8;
    border-bottom: 1px solid ${({theme}) => themes[theme].disabled.border};    
    background-color: ${({theme}) => themes[theme].disabled.background};        
  }
  
  ::-ms-clear {
    display: none;
  }
`;

export default Input
