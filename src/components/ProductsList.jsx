const products = [
  {
    "id": 1,
    "name": "Combo Gamer Meetion",
    "image": "./img/products/product-4.png",
    "rating": 4,
    "price": 150,
    "category": "Acessórios"
  },
  {
    "id": 2,
    "name": "Msi GeFore Gtx 1650",
    "image": "./img/products/product-5.png",
    "rating": 5,
    "price": 2000,
    "category": "Placa de Vídeo"
  },
  {
    "id": 3,
    "name": "Dualsense PS5",
    "image": "/img/products/product-6.png",
    "rating": 5,
    "price": 100,
    "category": "Acessórios"
  },
  {
    "id": 4,
    "name": "Cadeira Gamer Frizzi",
    "image": "/img/products/product-7.png",
    "rating": 3,
    "price": 1100,
    "category": "Cadeira | Cadeira Gamer"
  },
  {
    "id": 5,
    "name": "iPhone 14 Pro Max 512GB",
    "image": "/img/products/product-8.png",
    "rating": 5,
    "price": 9000,
    "category": "Smartphone"
  },
  {
    "id": 6,
    "name": "Samsung Galaxy S23 Ultra 1TB",
    "image": "/img/products/product-9.png",
    "rating": 5,
    "price": 3500,
    "category": "Smartphone"
  },
  {
    "id": 7,
    "name": "Asus Rog Phone 3 Gamer",
    "image": "/img/products/product-10.png",
    "rating": 4,
    "price": 6500,
    "category": "Smartphone"
  },
  {
    "id": 8,
    "name": "Xiaomi 13 Ultra",
    "image": "/img/products/product-11.png",
    "rating": 4,
    "price": 2600,
    "category": "Smartphone"
  },
  {
    "id": 9,
    "name": "Xbox Series X",
    "image": "/img/products/product-12.png",
    "rating": 5,
    "price": 4500,
    "category": "Console | Xbox"
  },
  {
    "id": 10,
    "name": "Racingwheel GT480 Ferrari",
    "image": "/img/products/product-13.png",
    "rating": 5,
    "price": 3000,
    "category": "Acessórios | Volante"
  },
  {
    "id": 11,
    "name": "PlayStation 5",
    "image": "/img/products/product-14.png",
    "rating": 5,
    "price": 5400,
    "category": "Console | PlayStation"
  },
  {
    "id": 12,
    "name": "Gaming Desktop RTX 3090Ti",
    "image": "/img/products/product-15.png",
    "rating": 5,
    "price": 5100,
    "category": "Computador | Computador Gamer"
  },
  {
    "id": 13,
    "name": "Notebook Gamer Dell G15 I7 13650hx 16gb 1tb Rtx4050 6gb W11 Cor Grafite",
    "image": "/img/products/product-3.png",
    "rating": 5,
    "price": 9256,
    "category": "Notebook | Notebook Gamer"
  }
]

import { Link } from "react-router-dom"
import './ProductsList.css'

// icons 
import { MdAddShoppingCart } from "react-icons/md";

const ProductsList = () => {
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className="product-title"><Link>{product.name}</Link></p>
              <p>{product.rate}</p>
              <p className="product-price"><span>à vista </span><Link>R$ {product.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Link>
              <span>no PIX 15% de desconto</span></p>
              <p className="product-parcela">em até 12x sem juros no cartão</p>
              <p className="category-container">
                {product.category}
              </p>
                <button className="add-to-cart"><MdAddShoppingCart /></button>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsList