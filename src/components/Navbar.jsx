import { Link } from "react-router-dom";
import './Navbar.css'
import CartMenu from "./CartMenu";

// icons
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaArrowTurnDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-container">
          <Link to='/'>
            <div className="logo">
              <img src="/img/logo/logo-black.png" alt="logo" />
              <h1>Ecommerce</h1>
            </div>
          </Link>
          <nav>
            <ul className="navbar">
              <li>
                <div className="categories-menu">
                    <Link>Categorias <FaArrowTurnDown /></Link>
                      <div className=""></div>
                    <div className="categories-sub-menu">
                      <ul>
                      <li><Link>Computadores</Link></li>
                      <li><Link>Notebooks</Link></li>
                      <li><Link>Smartphone</Link></li>
                      <li><Link>Monitores</Link></li>
                      <li><Link>Acessórios</Link></li>
                      <li><Link>Decoração</Link></li>
                      </ul>
                    </div>
                </div>
              </li>
              <li>
                <div>
                    <Link>Ofertas</Link>
                </div>
              </li>
              <li>
                <div>
                    <Link>Cupons</Link>
                </div>
              </li>
              <li>
                <div>
                    <Link>Descobrir</Link>
                </div>
              </li>
              <li>
                <div>
                    <Link>Vender</Link>
                </div>
              </li>
              <li>
                <div>
                    <Link to="/contact">Contato</Link>
                </div>
              </li>
            </ul>
          </nav>
          <div className="user-area">
              <button className="cart-shopping">
              <IoCartOutline />
            <CartMenu />
              </button>
            <button className="sign-in">
                Criar conta
            </button>
            <button className="sign-up">
                Entrar
            </button>
          </div>
      </div>
      <div className="search-bar-area">
        <div className="search-bar">
            <input type="search" placeholder="Procure qualquer coisa aqui!" />
            <div className="search-btn">
                <button>
                    <IoSearch />
                </button>
            </div>
            </div>
      </div>
    </header>
  );
};

export default Navbar;
