import style from './MyButton.module.css'

const MyButton = ({text}, {effect}) => { 
  return (
    <div className={style.my_button} onClick={effect}>{text}</div>
  )
};

export default MyButton;