import { useRef, useEffect } from 'react';

function InputWithLabel({
  id,
  value,
  type = 'text',
  isFocused,
  onInputChange,
  children,
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}:&nbsp;</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        autoFocus={isFocused}
        onChange={onInputChange}
      />
    </>
  );
}

export default InputWithLabel;
