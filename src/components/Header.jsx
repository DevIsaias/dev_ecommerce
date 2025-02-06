import './Header.css'

// icons 
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <div className='header-bottom'>
        <div className="header-bottom-left">
            <h3>Que tal transformar seu quarto e seu Setup com nossos produtos gamer?</h3>
            <p>O melhor da Tecnologia você só encontra aqui! Explore nossas categorias e descubra os melhores preços</p>
            <button className="explore">
                Veja agora!
                <IoIosArrowForward />
            </button>
        </div>
        <div className="header-bottom-right">
          <img src="./img/header-image.png" alt="" />
        </div>
    </div>
  )
}

export default Header