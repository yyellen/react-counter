const Button = (props) => {
  const { action, text, style } = props;
  
  return (
    <button type="button" className={ style } onClick={ action }>{ text }</button>
  );
};

export default Button;
