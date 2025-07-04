function InputWithLabel({
  id,
  value,
  type = 'text',
  isFocused,
  onInputChange,
  children,
}) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
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
