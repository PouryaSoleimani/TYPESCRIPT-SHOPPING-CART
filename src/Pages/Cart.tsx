import React, { useContext } from "react";
import "./Cart.css";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
export default function Cart() {
  return (
    <>
      {true ? ( // if shoppping cart is not empty
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            <div className="card">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
              />
              <main>
                <p>Test Title ...</p>
                <div className="card-details">
                  <div>
                    <AiFillStar style={{ color: "orange" }} />
                    <AiFillStar style={{ color: "orange" }} />
                    <AiFillStar style={{ color: "orange" }} />
                    <AiFillStar style={{ color: "orange" }} />
                    <AiFillStar style={{ color: "orange" }} />

                    <AiOutlineStar style={{ color: "orange" }} />
                    <AiOutlineStar style={{ color: "orange" }} />
                    <AiOutlineStar style={{ color: "orange" }} />
                    <AiOutlineStar style={{ color: "orange" }} />
                    <AiOutlineStar style={{ color: "orange" }} />
                  </div>
                  <p>111$</p>
                </div>
                <div className="product-count">
                  <p>Count: 22</p>
                </div>
                <button>Remove From Basket</button>
              </main>
            </div>
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
