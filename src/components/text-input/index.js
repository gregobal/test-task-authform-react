import React, {useState} from 'react'

import Wrapper from './wrapper'
import Input from './input'
import Label from './label'
import {DoneIcon, LockIcon} from './icon'

const TextInput = ({id, label, disabled, onValidate, size, theme}) => {
  const [filled, setFilled] = useState(false);
  const [valid, setValid] = useState(true);
  const [viewRightIcon, setViewRightIcon] = useState(false);

  const rightIcon = valid ? <DoneIcon/> : <LockIcon/>;

  const isFilled = event => event.target.value !== '';

  const handleInputChange = event => {
    setViewRightIcon(false);

    setFilled(isFilled(event));

    if (onValidate instanceof Function) {
      setValid(isFilled(event) && onValidate(event.target));
    }
  };

  const handleInputBlur = event => {
    setViewRightIcon(true);
  };

  return (
    <Wrapper size={size}>
      <Input id={id}
             theme={theme}
             size={size}
             onChange={handleInputChange}
             onBlur={handleInputBlur}
             filled={filled}
             valid={valid}
             disabled={disabled}/>
      <Label htmlFor={id}
             theme={theme}
             size={size}
             labelUp={filled}
             valid={valid}>
        {label}
      </Label>
      {viewRightIcon && rightIcon}
    </Wrapper>
  )
};

TextInput.defaultProps = {
  size: "normal",
  theme: 'dark'
};

export default TextInput
