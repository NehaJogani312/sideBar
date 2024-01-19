import mainImage from '../assets/mainImg.jpg'
import style from '../styles/main.module.css'

const Main = () => {
  return (
    <div className={style.main}>
        <img src={mainImage} alt="main img" />
    </div>
  )
}

export default Main