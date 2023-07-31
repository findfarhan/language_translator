import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryProduct } from '../../Components/Data/BuyNowData';
import Rating from '../Rating/Rating';
const Plates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 8;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = currentPage - recordPerPage;
  const record = CategoryProduct.slice(firstIndex, lastIndex);
  const npage = Math.ceil(CategoryProduct.length / recordPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);
  const params = useParams();
  console.log(params.c1);
  return (
    <>
      <div className="container pt-md-1 pt-5 text-md-start text-center">
        <h1 className="friendly-head">Eco-friendly {params.c1}</h1>
        <p className="friendly-para py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp incididunt ut labore et dolore magna aliqua. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="row">
          <div className="col-xl-12 shop-by-size-container1 px-0">
            {record.map((product) => (
              <div className="categoryCard categoryCard1" key={product.id}>
                <img src={product.img} className="img-fluid"></img>
                <h4 className=" pb-2 ">{params.c1}</h4>
                <div className="d-flex justify-content-center">
                  <div className="category-rating">
                    <Rating rating={product.review} />
                  </div>
                  <span className="text-light ps-1">(3053)</span>
                </div>
                <p>${product.price}.00</p>
                <button>{product.btn}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              onClick={prePage}
            >
              <span aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7L7 11M7 11L11 15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                    stroke="#D75D39"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          {CategoryProduct.map((pro, n) => (
            <div className="page-item" key={pro}>
              <a
                class={`page-link page-num mx-2 ${
                  currentPage === n ? 'active' : ''
                }`}
                href="#"
                key={pro.id}
                onClick={() => changePage(n)}
              >
                {n}
              </a>
            </div>
          ))}
          <div className="page-item">
            <a class="page-link" href="#" aria-label="Next" onClick={nextPage}>
              <span aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 15L15 11M15 11L11 7M15 11L7 11M1 11C1 5.47715 5.47715 0.999999 11 0.999999C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11Z"
                    stroke="#D75D39"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changePage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Plates;
