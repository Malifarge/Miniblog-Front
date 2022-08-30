const Button = ({ type, text, disabled, handleClick }) => {
    return <button type={type} disabled={disabled} onClick={handleClick}>{text}</button>
  }
  
  export default Button