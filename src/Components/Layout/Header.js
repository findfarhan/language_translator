import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import deskLogo from '../../assets/images/LOGO.png';
import { ListItem } from '../Data/HeaderData';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  const params = useParams();
  return (
    <>
      <header>
        <div className="topbar-nav" style={{ backgroundColor: '#D75D39' }}>
          <div className="container-fluid py-1">
            <div className="row px-5 d-flex align-items-center ">
              <div className="col-xl-3 topbar-right header-right-col">
                <p className="">
                  {t('orderNow')}
                  <Link
                    to={'tel:+99(0)101 0000 888'}
                    className="text-decoration-none text-light"
                  >
                    +99(0)101 0000 888
                  </Link>
                </p>
              </div>
              <div className="col-xl-6  col-lg-12 col-12 header-left-col">
                <p className="featured-text desktop-desc">{t('todayNow')}</p>
                <p className="featured-text-bold featured-text mobile-desc">
                  {t('save10')}
                </p>
              </div>
              <div className="col-xl-3  col-lg-12 col-12 topbar-right header-right-col">
                <p className=""> {t('trackNow')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="primarybar-nav" style={{ backgroundColor: '#FCF7EF' }}>
          <div
            className="container-fluid primary-nav-container"
            style={{ borderBottom: '1px solid  #1E1E1E' }}
          >
            <nav
              className="navbar navbar-expand-xl navbar-light"
              style={{ backgroundColor: '#FCF7EF' }}
            >
              <div
                className="mobile-header icon-controls mobile-view-content "
                style={{ padding: '12px' }}
              >
                <div className="mobile-header-left">
                  <Link
                    className="navbar-brand default-logo fs-1 a_link"
                    to="/"
                  >
                    <img
                      src={deskLogo}
                      alt="AirFilter Logo"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="mobile-header-right">
                  <Link
                    to="/cart"
                    id="menu-cart-preview-mobile"
                    className="text-light a_link"
                  >
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1579 5.5H14.5829V4.58333C14.5829 2.01667 12.5662 0 9.99955 0C7.43288 0 5.41621 2.01667 5.41621 4.58333V9.16667H7.24954V7.33333H10.9162V5.5H7.24954V4.58333C7.24954 3.025 8.44121 1.83333 9.99955 1.83333C11.5579 1.83333 12.7495 3.025 12.7495 4.58333V9.16667H14.5829V7.33333H16.5079L17.3329 20.1667H2.75788L3.49121 7.33333H3.58288V5.5H1.84121L0.741211 22H19.1662L18.1579 5.5Z"
                        fill="#385F59"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart text-sgs-white  d-none d-xl-flex"
                    >
                      <circle cx={9} cy={21} r={1} />
                      <circle cx={20} cy={21} r={1} />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span className="d-none d-xl-flex text-light">
                      {t('Shopping Cart')}
                    </span>
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#primaryMenu"
                    aria-controls="primaryMenu"
                    aria-expanded="false"
                    aria-label="Toggle Primary Menu"
                  >
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9H21M1 1H21M1 17H21"
                        stroke="#385F59"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="desktop-header">
                <Link
                  className="navbar-brand d-flex d-xl-inline-flex d-none default-logo me-2"
                  to="/"
                >
                  <img
                    src={deskLogo}
                    alt="AirFilter Logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="primaryMenu">
                <div className="search-bar mobile-search d-xl-none px-3 pt-4 pb-3">
                  <form name="product_search" method="get">
                    <span
                      className="twitter-typeahead"
                      style={{ position: 'relative', display: 'inline-block' }}
                    >
                      <input
                        type="text"
                        className="form-control tt-hint"
                        aria-label="Search ..."
                        style={{
                          height: 30,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          borderColor: 'transparent',
                          boxShadow: 'none',
                          opacity: 1,
                          background:
                            'none 0% 0% / auto repeat scroll padding-box padding-box rgb(255, 255, 255)',
                        }}
                        readOnly
                        autoComplete="off"
                        spellCheck="false"
                        tabIndex={-1}
                        dir="ltr"
                      />
                      <input
                        type="text"
                        name="q"
                        id="search_product"
                        className="form-control tt-input"
                        placeholder="Search..."
                        aria-label="Search ..."
                        style={{
                          height: 30,
                          position: 'relative',
                          verticalAlign: 'top',
                          backgroundColor: 'transparent',
                        }}
                        autoComplete="off"
                        spellCheck="false"
                        dir="auto"
                      />
                      <pre
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          visibility: 'hidden',
                          whiteSpace: 'pre',
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: 16,
                          fontStyle: 'normal',
                          fontVariant: 'normal',
                          fontWeight: 400,
                          wordSpacing: 0,
                          letterSpacing: 0,
                          textIndent: 0,
                          textRendering: 'auto',
                          textTransform: 'none',
                        }}
                      />
                      <div
                        className="tt-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          zIndex: 100,
                          display: 'none',
                        }}
                      >
                        <div className="tt-dataset tt-dataset-best-products" />
                      </div>
                    </span>
                  </form>
                  {ListItem.map((list) => (
                    <div
                      className="dropdown dropdown-main_container text-center"
                      key={list.id}
                    >
                      <button
                        className="btn dropbtn  dropdown-toggle dropdown-main_btn "
                        type="button"
                        id="dropdownMenuButton"
                        // data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ fontSize: '18px' }}
                      >
                        <div className="d-inline pe-2 fw-bold">
                          {t(list.name)}
                        </div>
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L7 7L13 1"
                            stroke="#385F59"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <div
                        className="dropdown-menu drop-1 dropdown-content nav-head-order"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div className="container">
                          <div className="row order-nav-container ">
                            <div className="col-6 py-3 pe-0">
                              <div style={{ borderRight: '2px solid #385F59' }}>
                                {list.list.map((li) => (
                                  <ul
                                    className="brand-drop-down-ul ps-0"
                                    key={li.id}
                                  >
                                    <li className="py-2 pe-5">
                                      <Link to={`/subcategory/${params.c1}`}>
                                        {t(li.list1)}
                                      </Link>
                                    </li>
                                  </ul>
                                ))}
                              </div>
                            </div>
                            <div className="col-6 py-3">
                              {list.list.map((li) => (
                                <ul
                                  className="brand-drop-down-ul ps-0"
                                  key={li.id}
                                >
                                  <li className="py-2">
                                    <Link to={`/subcategory/${params.c1}`}>
                                      {t(li.list2)}
                                    </Link>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="icon-controls desktop-view-content d-none d-xl-flex">
                  <div className="search-bar">
                    <form name="product_search" method="post">
                      <span
                        className="twitter-typeahead"
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                        }}
                      >
                        <input
                          type="text"
                          className="form-control tt-hint"
                          aria-label="Search ..."
                          style={{
                            height: 41,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            borderColor: 'transparent',
                            boxShadow: 'none',
                            opacity: 1,
                            background:
                              'none 0% 0% / auto repeat scroll padding-box padding-box rgb(255, 255, 255)',
                          }}
                          readOnly
                          autoComplete="off"
                          spellCheck="false"
                          tabIndex={-1}
                          dir="ltr"
                        />
                        <input
                          type="text"
                          name="q"
                          id="search_product_desktop"
                          className="form-control tt-input"
                          style={{
                            height: 41,
                            position: 'relative',
                            verticalAlign: 'top',
                            backgroundColor: 'transparent',
                          }}
                          autoComplete="off"
                          spellCheck="false"
                          dir="auto"
                        />
                        <pre
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            visibility: 'hidden',
                            whiteSpace: 'pre',
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontVariant: 'normal',
                            fontWeight: 400,
                            wordSpacing: 0,
                            letterSpacing: 0,
                            textIndent: 0,
                            textRendering: 'auto',
                            textTransform: 'none',
                          }}
                        />
                        <div
                          className="tt-menu"
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            zIndex: 100,
                            display: 'none',
                          }}
                        >
                          <div className="tt-dataset tt-dataset-best-products" />
                        </div>
                      </span>
                      <button
                        className="search-button srch_btn"
                        value="Search"
                        type="submit"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                            fill="#FCF7EF"
                          />
                          <path
                            d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                            stroke="#385F59"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <Link
                    to="tel:+99(0)101 0000 888"
                    className="text-light d-flex justify-content-end pe-0"
                  >
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9381 5C14.9149 5.19057 15.8125 5.66826 16.5162 6.37194C17.2199 7.07561 17.6976 7.97326 17.8881 8.95M13.9381 1C15.9674 1.22544 17.8597 2.13417 19.3044 3.57701C20.749 5.01984 21.6601 6.91101 21.8881 8.94M20.8881 16.92V19.92C20.8892 20.1985 20.8322 20.4742 20.7206 20.7293C20.6091 20.9845 20.4454 21.2136 20.2402 21.4019C20.035 21.5901 19.7927 21.7335 19.5289 21.8227C19.265 21.9119 18.9855 21.9451 18.7081 21.92C15.631 21.5856 12.6751 20.5341 10.0781 18.85C7.66194 17.3147 5.61345 15.2662 4.07812 12.85C2.38809 10.2412 1.33636 7.27099 1.00812 4.18C0.983127 3.90347 1.01599 3.62476 1.10462 3.36162C1.19324 3.09849 1.33569 2.85669 1.52288 2.65162C1.71008 2.44655 1.93792 2.28271 2.19191 2.17052C2.44589 2.05833 2.72046 2.00026 2.99812 2H5.99812C6.48342 1.99522 6.95391 2.16708 7.32188 2.48353C7.68985 2.79999 7.93019 3.23945 7.99812 3.72C8.12474 4.68007 8.35957 5.62273 8.69812 6.53C8.83266 6.88792 8.86178 7.27691 8.78202 7.65088C8.70227 8.02485 8.51698 8.36811 8.24812 8.64L6.97812 9.91C8.40167 12.4135 10.4746 14.4864 12.9781 15.91L14.2481 14.64C14.52 14.3711 14.8633 14.1858 15.2372 14.1061C15.6112 14.0263 16.0002 14.0555 16.3581 14.19C17.2654 14.5286 18.2081 14.7634 19.1681 14.89C19.6539 14.9585 20.0975 15.2032 20.4146 15.5775C20.7318 15.9518 20.9003 16.4296 20.8881 16.92Z"
                        stroke="#385F59"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h5 className="fw-bold">{t('Available')}</h5>
                  </Link>
                  <Link
                    to="/login-and-signup"
                    className="text-light a_link d-flex justify-content-end ps-0"
                  >
                    <svg
                      width="28"
                      height="32"
                      viewBox="0 0 28 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 30V26.8889C26 25.2387 25.3679 23.656 24.2426 22.4891C23.1174 21.3222 21.5913 20.6667 20 20.6667H8C6.4087 20.6667 4.88258 21.3222 3.75736 22.4891C2.63214 23.656 2 25.2387 2 26.8889V30M20 8.22222C20 11.6587 17.3137 14.4444 14 14.4444C10.6863 14.4444 8 11.6587 8 8.22222C8 4.78578 10.6863 2 14 2C17.3137 2 20 4.78578 20 8.22222Z"
                        stroke="#385F59"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h5 className="fw-bold">
                      <p className="">{t('Signin')}</p>
                      {t('Account')}
                    </h5>{' '}
                  </Link>
                  <Link
                    to="/cart"
                    id="menu-cart-preview-desktop"
                    className="text-light a_link d-flex justify-content-center"
                  >
                    <div className="position-relative">
                      <svg
                        width="34"
                        height="33"
                        viewBox="0 0 34 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2H7.45455L11.1091 20.491C11.2338 21.1267 11.5753 21.6978 12.0739 22.1043C12.5725 22.5108 13.1964 22.7267 13.8364 22.7143H27.0909C27.7309 22.7267 28.3548 22.5108 28.8533 22.1043C29.3519 21.6978 29.6935 21.1267 29.8182 20.491L32 8.90476H8.81818M14.2727 29.619C14.2727 30.3817 13.6622 31 12.9091 31C12.156 31 11.5455 30.3817 11.5455 29.619C11.5455 28.8564 12.156 28.2381 12.9091 28.2381C13.6622 28.2381 14.2727 28.8564 14.2727 29.619ZM29.348 29.619C29.348 30.3817 28.7375 31 27.9844 31C27.2312 31 26.6207 30.3817 26.6207 29.619C26.6207 28.8564 27.2312 28.2381 27.9844 28.2381C28.7375 28.2381 29.348 28.8564 29.348 29.619Z"
                          stroke="#385F59"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="position-absolute top-0 start-50 px-2 py-1 text-light translate-middle badge rounded-pill bg-danger">
                        1
                      </span>
                    </div>
                    <h5 className="fw-bold">
                      <p className="">{t('view')}</p>
                      {t('Cart')}
                    </h5>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="primarybar-nav secondarybar-nav">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    .navbar-expand-xl .navbar-nav {\n        justify-content: space-evenly;\n        width: 100%;\n    }\n   .primarybar-nav nav .desktop-view-content {\n        display: flex;\n        justify-content: flex-end;\n        width: 100%;\n    }\n       .desktop-view-content a:last-child:after{\n       border: none;\n        width: 0;\n\n    }\n    .desktop-view-content a{\n        padding-right: 11px !important;\n\n    }\n    .secondarybar-nav .nav-link{\n        padding: 1rem 0.5rem !important;\n        font-size: 15px;\n        color: rgba(0,0,0,.7) !important;\n    }\n    .secondarybar-nav a.nav-link:hover{\n        color: rgba(255,0,0,.7);\n        background-color: white;\n    }\n\n    .primarybar-nav nav .desktop-view-content .search-bar {\n              position: relative;\n  margin-right:50px;\n margin-left:30px;\n        width: 80%;\n    }\n  \n',
            }}
          />
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-light d-none d-xl-block  py-1"
          style={{
            backgroundColor: '#FCF7EF',
            borderBottom: '1px solid  #1E1E1E',
          }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ul_container d-flex justify-content-center ">
              {ListItem.map((list) => (
                <li className="nav-item active " key={list.id}>
                  <div className="dropdown dropdown-main_container">
                    <button
                      className="btn dropbtn  dropdown-toggle dropdown-main_btn "
                      type="button"
                      id="dropdownMenuButton"
                      // data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ fontSize: '18px' }}
                    >
                      <div className="d-inline pe-2 fw-bold">
                        {t(list.name)}
                      </div>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#385F59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className="dropdown-menu drop-1 dropdown-content nav-head-order"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div className="container">
                        <div className="row order-nav-container ">
                          <div className="col-6 py-3 pe-0">
                            <div style={{ borderRight: '2px solid #385F59' }}>
                              {list.list.map((li) => (
                                <ul
                                  className="brand-drop-down-ul ps-0"
                                  key={li.id}
                                >
                                  <li className="py-2 pe-5">
                                    <Link to={`/subcategory/${params.c1}`}>
                                      {t(li.list1)}
                                    </Link>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          </div>
                          <div className="col-6 py-3">
                            {list.list.map((li) => (
                              <ul
                                className="brand-drop-down-ul ps-0"
                                key={li.id}
                              >
                                <li className="py-2">
                                  <Link to={`/subcategory/${params.c1}`}>
                                    {t(li.list2)}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
