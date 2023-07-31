import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <>
      <div className="main-heading">
        <h1>Contact us</h1>
      </div>

      {/* /////////////////////////////////////////// Contact first section/////////////////////// */}

      <div className="container-fluid pt-md-4 py-0 mb-0">
        <div className="row d-none d-md-block">
          <div className="col-xl-10" style={{ margin: '50px auto' }}>
            <div className="row " style={{ display: 'flex' }}>
              <div className="col-md-4" style={{}}>
                <div className="customer-card" style={{ marginLeft: 'auto' }}>
                  <h3>
                    <svg
                      width={70}
                      height={70}
                      viewBox="0 0 81 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M63.18 49.815C64.3612 46.9463 65.0025 43.875 65.0025 40.5C65.0025 38.07 64.6312 35.7413 63.99 33.5813C61.7962 34.0875 59.5013 34.3575 57.105 34.3575C52.1977 34.3628 47.361 33.1881 43.0027 30.9326C38.6444 28.6771 34.8922 25.4069 32.0625 21.3975C29.0354 28.7218 23.325 34.6133 16.0988 37.8675C15.9637 38.7113 15.9637 39.6225 15.9637 40.5C15.9637 43.7221 16.5984 46.9127 17.8315 49.8896C19.0645 52.8665 20.8718 55.5714 23.1503 57.8498C27.7517 62.4512 33.9926 65.0363 40.5 65.0363C44.0438 65.0363 47.4525 64.26 50.5238 62.8763C52.4475 66.555 53.325 68.3775 53.2575 68.3775C47.7225 70.2338 43.4362 71.145 40.5 71.145C32.3325 71.145 24.5363 67.9388 18.7988 62.1675C15.309 58.6885 12.7149 54.4151 11.2387 49.7138H6.75V34.3575H10.4287C11.5433 28.9322 14.1058 23.9099 17.8443 19.8234C21.5827 15.7369 26.3578 12.7386 31.6627 11.1468C36.9676 9.555 42.6044 9.42898 47.9752 10.7821C53.3459 12.1353 58.2501 14.9171 62.1675 18.8325C66.4208 23.069 69.3218 28.4718 70.5037 34.3575H74.25V49.7138H74.0475L62.0325 60.75L44.145 58.725V53.0888H60.4463L63.18 49.815ZM31.2863 39.7238C32.2988 39.7238 33.2775 40.1288 33.9862 40.8713C34.6985 41.5893 35.0982 42.5598 35.0982 43.5713C35.0982 44.5827 34.6985 45.5532 33.9862 46.2713C33.2775 46.98 32.2988 47.385 31.2863 47.385C29.16 47.385 27.4388 45.6975 27.4388 43.5713C27.4388 41.445 29.16 39.7238 31.2863 39.7238ZM49.68 39.7238C51.8063 39.7238 53.4938 41.445 53.4938 43.5713C53.4938 45.6975 51.8063 47.385 49.68 47.385C47.5537 47.385 45.8325 45.6975 45.8325 43.5713C45.8325 42.5508 46.2379 41.5722 46.9594 40.8507C47.681 40.1291 48.6596 39.7238 49.68 39.7238Z"
                        fill="white"
                      />
                    </svg>
                  </h3>
                  <h4>Customer Service </h4>
                  <p>We’re here to help!</p>
                </div>
              </div>

              <div className="col-md-4" style={{}}>
                <div className="customer-card" style={{ margin: 'auto' }}>
                  <h3>
                    <svg
                      width={70}
                      height={70}
                      viewBox="0 0 60 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_1124)">
                        <path
                          d="M58.5 33H57V22.8656C57 21.675 56.5219 20.5312 55.6781 19.6875L46.3125 10.3219C45.4688 9.47812 44.325 9 43.1344 9H39V4.5C39 2.01562 36.9844 0 34.5 0H10.5C8.01562 0 6 2.01562 6 4.5V9H0.75C0.3375 9 0 9.3375 0 9.75V11.25C0 11.6625 0.3375 12 0.75 12H26.25C26.6625 12 27 12.3375 27 12.75V14.25C27 14.6625 26.6625 15 26.25 15H3.75C3.3375 15 3 15.3375 3 15.75V17.25C3 17.6625 3.3375 18 3.75 18H23.25C23.6625 18 24 18.3375 24 18.75V20.25C24 20.6625 23.6625 21 23.25 21H0.75C0.3375 21 0 21.3375 0 21.75V23.25C0 23.6625 0.3375 24 0.75 24H20.25C20.6625 24 21 24.3375 21 24.75V26.25C21 26.6625 20.6625 27 20.25 27H6V39C6 43.9688 10.0312 48 15 48C19.9688 48 24 43.9688 24 39H36C36 43.9688 40.0312 48 45 48C49.9688 48 54 43.9688 54 39H58.5C59.325 39 60 38.325 60 37.5V34.5C60 33.675 59.325 33 58.5 33ZM15 43.5C12.5156 43.5 10.5 41.4844 10.5 39C10.5 36.5156 12.5156 34.5 15 34.5C17.4844 34.5 19.5 36.5156 19.5 39C19.5 41.4844 17.4844 43.5 15 43.5ZM45 43.5C42.5156 43.5 40.5 41.4844 40.5 39C40.5 36.5156 42.5156 34.5 45 34.5C47.4844 34.5 49.5 36.5156 49.5 39C49.5 41.4844 47.4844 43.5 45 43.5ZM52.5 24H39V13.5H43.1344L52.5 22.8656V24Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1124">
                          <rect width={60} height={48} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </h3>
                  <h4>Shipping & Returns </h4>
                  <p>Learn about our shipping policies</p>
                </div>
              </div>

              <div className="col-md-4" style={{}}>
                <div className="customer-card" style={{ marginRight: 'auto' }}>
                  <h3>
                    <svg
                      width={70}
                      height={70}
                      viewBox="0 0 81 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.4997 48.25H26.4997L16.833 57.9167V19.25C16.833 18.6091 17.0876 17.9944 17.5408 17.5412C17.994 17.088 18.6087 16.8333 19.2497 16.8333H55.4997C56.1406 16.8333 56.7553 17.088 57.2085 17.5412C57.6617 17.9944 57.9163 18.6091 57.9163 19.25V45.8333C57.9163 46.4743 57.6617 47.089 57.2085 47.5422C56.7553 47.9954 56.1406 48.25 55.4997 48.25ZM67.583 33.75V67.5833L57.9163 57.9167H31.333C30.6921 57.9167 30.0774 57.6621 29.6242 57.2089C29.171 56.7556 28.9163 56.141 28.9163 55.5V53.0833H62.7497V31.3333H65.1663C65.8073 31.3333 66.422 31.588 66.8752 32.0412C67.3284 32.4944 67.583 33.1091 67.583 33.75ZM31.7922 21.6667C29.6897 21.6667 27.998 22.15 26.693 23.0925C25.4363 24.0833 24.808 25.4608 24.8322 27.37L24.8563 27.4425H29.5205C29.5447 26.7175 29.7622 26.1617 30.1972 25.775C30.6447 25.4039 31.211 25.2066 31.7922 25.2192C32.5413 25.2192 33.1697 25.4608 33.6047 25.8958C34.0397 26.355 34.233 26.9833 34.233 27.7083C34.233 28.4817 34.0638 29.1342 33.6772 29.69C33.3388 30.2458 32.8313 30.7292 32.203 31.1158C30.9705 31.9375 30.1247 32.6625 29.6655 33.315C29.1822 33.9433 28.9163 34.9583 28.9163 36.1667H33.7497C33.7497 35.4175 33.8463 34.8133 34.0638 34.3783C34.2813 33.9433 34.6922 33.5083 35.2963 33.1217C36.3838 32.5417 37.278 31.8408 37.9788 30.8742C38.6797 29.9075 39.0422 28.9167 39.0422 27.7083C39.0422 25.8717 38.3897 24.3975 37.0847 23.31C35.8038 22.2225 34.0397 21.6667 31.7922 21.6667ZM28.9163 38.5833V43.4167H33.7497V38.5833H28.9163ZM43.4163 43.4167H48.2497V38.5833H43.4163V43.4167ZM43.4163 21.6667V36.1667H48.2497V21.6667H43.4163Z"
                        fill="white"
                      />
                    </svg>
                  </h3>
                  <h4>Frequently Asked Question </h4>
                  <p>Get answers to the most asked questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-block d-md-none">
          <div className="col-xl-10" style={{ margin: '30px auto 0px auto' }}>
            <div className="row " style={{ display: 'flex' }}>
              <div className="col-md-4 pb-3" style={{}}>
                <div className="customer-card1">
                  <div className=" d-flex align-items-center">
                    <div className="col-3">
                      <h3>
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 81 81"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M63.18 49.815C64.3612 46.9463 65.0025 43.875 65.0025 40.5C65.0025 38.07 64.6312 35.7413 63.99 33.5813C61.7962 34.0875 59.5013 34.3575 57.105 34.3575C52.1977 34.3628 47.361 33.1881 43.0027 30.9326C38.6444 28.6771 34.8922 25.4069 32.0625 21.3975C29.0354 28.7218 23.325 34.6133 16.0988 37.8675C15.9637 38.7113 15.9637 39.6225 15.9637 40.5C15.9637 43.7221 16.5984 46.9127 17.8315 49.8896C19.0645 52.8665 20.8718 55.5714 23.1503 57.8498C27.7517 62.4512 33.9926 65.0363 40.5 65.0363C44.0438 65.0363 47.4525 64.26 50.5238 62.8763C52.4475 66.555 53.325 68.3775 53.2575 68.3775C47.7225 70.2338 43.4362 71.145 40.5 71.145C32.3325 71.145 24.5363 67.9388 18.7988 62.1675C15.309 58.6885 12.7149 54.4151 11.2387 49.7138H6.75V34.3575H10.4287C11.5433 28.9322 14.1058 23.9099 17.8443 19.8234C21.5827 15.7369 26.3578 12.7386 31.6627 11.1468C36.9676 9.555 42.6044 9.42898 47.9752 10.7821C53.3459 12.1353 58.2501 14.9171 62.1675 18.8325C66.4208 23.069 69.3218 28.4718 70.5037 34.3575H74.25V49.7138H74.0475L62.0325 60.75L44.145 58.725V53.0888H60.4463L63.18 49.815ZM31.2863 39.7238C32.2988 39.7238 33.2775 40.1288 33.9862 40.8713C34.6985 41.5893 35.0982 42.5598 35.0982 43.5713C35.0982 44.5827 34.6985 45.5532 33.9862 46.2713C33.2775 46.98 32.2988 47.385 31.2863 47.385C29.16 47.385 27.4388 45.6975 27.4388 43.5713C27.4388 41.445 29.16 39.7238 31.2863 39.7238ZM49.68 39.7238C51.8063 39.7238 53.4938 41.445 53.4938 43.5713C53.4938 45.6975 51.8063 47.385 49.68 47.385C47.5537 47.385 45.8325 45.6975 45.8325 43.5713C45.8325 42.5508 46.2379 41.5722 46.9594 40.8507C47.681 40.1291 48.6596 39.7238 49.68 39.7238Z"
                            fill="white"
                          />
                        </svg>
                      </h3>
                    </div>
                    <div className="col-9 ps-3">
                      <h4>Customer Service </h4>
                      <p>We’re here to help!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pb-3" style={{}}>
                <div className="customer-card1">
                  <div className=" d-flex align-items-center">
                    <div className="col-3">
                      <h3>
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 60 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1_1124)">
                            <path
                              d="M58.5 33H57V22.8656C57 21.675 56.5219 20.5312 55.6781 19.6875L46.3125 10.3219C45.4688 9.47812 44.325 9 43.1344 9H39V4.5C39 2.01562 36.9844 0 34.5 0H10.5C8.01562 0 6 2.01562 6 4.5V9H0.75C0.3375 9 0 9.3375 0 9.75V11.25C0 11.6625 0.3375 12 0.75 12H26.25C26.6625 12 27 12.3375 27 12.75V14.25C27 14.6625 26.6625 15 26.25 15H3.75C3.3375 15 3 15.3375 3 15.75V17.25C3 17.6625 3.3375 18 3.75 18H23.25C23.6625 18 24 18.3375 24 18.75V20.25C24 20.6625 23.6625 21 23.25 21H0.75C0.3375 21 0 21.3375 0 21.75V23.25C0 23.6625 0.3375 24 0.75 24H20.25C20.6625 24 21 24.3375 21 24.75V26.25C21 26.6625 20.6625 27 20.25 27H6V39C6 43.9688 10.0312 48 15 48C19.9688 48 24 43.9688 24 39H36C36 43.9688 40.0312 48 45 48C49.9688 48 54 43.9688 54 39H58.5C59.325 39 60 38.325 60 37.5V34.5C60 33.675 59.325 33 58.5 33ZM15 43.5C12.5156 43.5 10.5 41.4844 10.5 39C10.5 36.5156 12.5156 34.5 15 34.5C17.4844 34.5 19.5 36.5156 19.5 39C19.5 41.4844 17.4844 43.5 15 43.5ZM45 43.5C42.5156 43.5 40.5 41.4844 40.5 39C40.5 36.5156 42.5156 34.5 45 34.5C47.4844 34.5 49.5 36.5156 49.5 39C49.5 41.4844 47.4844 43.5 45 43.5ZM52.5 24H39V13.5H43.1344L52.5 22.8656V24Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_1124">
                              <rect width={60} height={48} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </h3>
                    </div>
                    <div className="col-9 ps-3">
                      <h4>Customer Service </h4>
                      <p>We’re here to help!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 " style={{}}>
                <div className="customer-card1">
                  <div className=" d-flex align-items-center">
                    <div className="col-3">
                      <h3>
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 81 81"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M55.4997 48.25H26.4997L16.833 57.9167V19.25C16.833 18.6091 17.0876 17.9944 17.5408 17.5412C17.994 17.088 18.6087 16.8333 19.2497 16.8333H55.4997C56.1406 16.8333 56.7553 17.088 57.2085 17.5412C57.6617 17.9944 57.9163 18.6091 57.9163 19.25V45.8333C57.9163 46.4743 57.6617 47.089 57.2085 47.5422C56.7553 47.9954 56.1406 48.25 55.4997 48.25ZM67.583 33.75V67.5833L57.9163 57.9167H31.333C30.6921 57.9167 30.0774 57.6621 29.6242 57.2089C29.171 56.7556 28.9163 56.141 28.9163 55.5V53.0833H62.7497V31.3333H65.1663C65.8073 31.3333 66.422 31.588 66.8752 32.0412C67.3284 32.4944 67.583 33.1091 67.583 33.75ZM31.7922 21.6667C29.6897 21.6667 27.998 22.15 26.693 23.0925C25.4363 24.0833 24.808 25.4608 24.8322 27.37L24.8563 27.4425H29.5205C29.5447 26.7175 29.7622 26.1617 30.1972 25.775C30.6447 25.4039 31.211 25.2066 31.7922 25.2192C32.5413 25.2192 33.1697 25.4608 33.6047 25.8958C34.0397 26.355 34.233 26.9833 34.233 27.7083C34.233 28.4817 34.0638 29.1342 33.6772 29.69C33.3388 30.2458 32.8313 30.7292 32.203 31.1158C30.9705 31.9375 30.1247 32.6625 29.6655 33.315C29.1822 33.9433 28.9163 34.9583 28.9163 36.1667H33.7497C33.7497 35.4175 33.8463 34.8133 34.0638 34.3783C34.2813 33.9433 34.6922 33.5083 35.2963 33.1217C36.3838 32.5417 37.278 31.8408 37.9788 30.8742C38.6797 29.9075 39.0422 28.9167 39.0422 27.7083C39.0422 25.8717 38.3897 24.3975 37.0847 23.31C35.8038 22.2225 34.0397 21.6667 31.7922 21.6667ZM28.9163 38.5833V43.4167H33.7497V38.5833H28.9163ZM43.4163 43.4167H48.2497V38.5833H43.4163V43.4167ZM43.4163 21.6667V36.1667H48.2497V21.6667H43.4163Z"
                            fill="white"
                          />
                        </svg>
                      </h3>
                    </div>
                    <div className="col-9 ps-3">
                      <h4>Customer Service </h4>
                      <p>We’re here to help!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: '#E1E2DA' }}>
          <div className="Col-12 secnd-h_container">
            <h1>Our Customer Service Team is Here to Help </h1>
          </div>
          <div className="col-xl-10" style={{ margin: '40px auto' }}>
            <div
              className="row"
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <div className="social-icons-card col-md-2 col-6">
                <h3>
                  <svg
                    width={105}
                    height={105}
                    viewBox="0 0 125 125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="62.5" cy="62.5" r="62.5" fill="#385F59" />
                    <path
                      d="M86.1502 79.2968C89.9055 75.9499 92.0319 71.4888 92.0319 66.8594C92.0319 61.9395 89.7287 57.3383 85.5464 53.9026C81.476 50.5599 76.0883 48.7188 70.375 48.7188C64.6617 48.7188 59.274 50.5599 55.2042 53.9028C51.0219 57.3383 48.7188 61.9395 48.7188 66.8594C48.7188 71.7793 51.0219 76.3805 55.2042 79.8163C59.274 83.1592 64.6617 85.0002 70.375 85.0002C71.1363 85.0002 71.9023 84.9666 72.6618 84.8998L73.9595 86.0246C78.43 89.8985 84.1471 92.031 90.0625 92.0312H92.0312V87.8406L91.4547 87.2642C89.18 84.9828 87.3775 82.2754 86.1502 79.2968ZM76.5383 83.0488L73.9345 80.792L73.0663 80.8985C72.1733 81.0077 71.2746 81.0624 70.375 81.0625C60.6051 81.0625 52.6562 74.691 52.6562 66.8594C52.6562 59.0279 60.6051 52.6562 70.375 52.6562C80.1449 52.6562 88.0937 59.0277 88.0937 66.8594C88.0937 70.7612 86.1471 74.4039 82.6125 77.1164L81.4786 77.9864L82.0018 79.4673C83.074 82.4918 84.65 85.3131 86.6631 87.812C82.9141 87.1862 79.4106 85.538 76.5383 83.0488Z"
                      fill="white"
                    />
                    <path
                      d="M38.4056 70.0644C40.2485 67.7316 41.6954 65.1118 42.6886 62.3096L43.2078 60.8362L42.075 59.9667C38.7419 57.4091 36.9062 53.9763 36.9062 50.3008C36.9062 42.915 44.4132 36.9062 53.6406 36.9062C60.4289 36.9062 66.2858 40.1584 68.9079 44.8182C69.3948 44.7945 69.8838 44.7812 70.375 44.7812C71.3616 44.7812 72.3392 44.8291 73.3077 44.9248C72.2944 42.2996 70.5346 39.9032 68.1151 37.916C64.2315 34.7257 59.0916 32.9688 53.6406 32.9688C48.1896 32.9688 43.0497 34.7257 39.1659 37.916C35.1696 41.1987 32.9688 45.597 32.9688 50.3008C32.9688 54.7058 34.9808 58.9503 38.5366 62.1432C37.3762 64.9357 35.6806 67.4742 33.5455 69.6157L32.9688 70.1923V74.3125H34.9375C38.5781 74.312 42.1686 73.4642 45.4249 71.8362C45.0678 70.4828 44.8586 69.0947 44.8009 67.6963C42.8245 68.8546 40.6597 69.6562 38.4056 70.0644Z"
                      fill="white"
                    />
                  </svg>
                </h3>
                <h4>Live Chat</h4>
                <p>Chat Now!</p>
              </div>

              <div className="social-icons-card col-md-2 col-6">
                <Link to={'mail:info@filterbuy.com'}>
                  <h3>
                    <svg
                      width={105}
                      height={105}
                      viewBox="0 0 125 125"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="62.5" cy="62.5" r="62.5" fill="#385F59" />
                      <path
                        d="M71.8813 86.25L61.7875 76.1563L65.1125 72.8313L71.8813 79.6L85.3 66.1813L88.625 69.5063L71.8813 86.25ZM62.5 60.125L81.5 48.25H43.5L62.5 60.125ZM62.5 64.875L43.5 53V76.75H55.7313L60.4813 81.5H43.5C42.1938 81.5 41.0751 81.0345 40.1441 80.1035C39.2131 79.1725 38.7484 78.0547 38.75 76.75V48.25C38.75 46.9438 39.2155 45.8251 40.1465 44.8941C41.0775 43.9631 42.1953 43.4984 43.5 43.5H81.5C82.8063 43.5 83.9249 43.9655 84.8559 44.8965C85.7869 45.8275 86.2516 46.9453 86.25 48.25V58.5813L81.5 63.3313V53L62.5 64.875Z"
                        fill="white"
                      />
                    </svg>
                  </h3>
                  <h4>Email Us</h4>
                  <p>info@filterbuy.com</p>
                </Link>
              </div>

              <div className="social-icons-card col-md-2 col-6">
                <Link to={'tel:+99(0)101 0000 888'}>
                  <h3>
                    <svg
                      width={105}
                      height={105}
                      viewBox="0 0 125 125"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="62.5" cy="62.5" r="62.5" fill="#385F59" />
                      <path
                        d="M50.4467 59.6262C53.8067 66.3475 59.22 71.8337 65.8233 75.2775L70.9567 70.0525C71.5867 69.4113 72.52 69.1975 73.3367 69.4825C75.95 70.3612 78.7733 70.8363 81.6667 70.8363C82.95 70.8363 84 71.905 84 73.2113V81.5C84 82.8063 82.95 83.875 81.6667 83.875C59.7567 83.875 42 65.8013 42 43.5C42 42.1938 43.05 41.125 44.3333 41.125H52.5C53.7833 41.125 54.8333 42.1938 54.8333 43.5C54.8333 46.4688 55.3 49.3188 56.1633 51.9788C56.42 52.81 56.2333 53.7362 55.58 54.4013L50.4467 59.6262Z"
                        fill="white"
                      />
                    </svg>
                  </h3>
                  <h4>Call Us</h4>
                  <p>+99(0)101 0000 888 </p>
                </Link>
              </div>

              <div className="social-icons-card col-md-2 col-6">
                <Link
                  to="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"
                  target="_blank"
                >
                  <h3>
                    <svg
                      width={105}
                      height={105}
                      viewBox="0 0 125 125"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="62.5" cy="62.5" r="62.5" fill="#385F59" />
                      <path
                        d="M62.5 12.5C45.2533 12.5 31.25 26.5033 31.25 43.75C31.25 58.5813 50 87.5 62.5 112.5C75 87.5 93.75 58.5813 93.75 43.75C93.75 26.5033 79.7467 12.5 62.5 12.5ZM62.5 62.5C55.6197 62.5 50 56.8803 50 50C50 43.1197 55.6197 37.5 62.5 37.5C69.3803 37.5 75 43.1197 75 50C75 56.8803 69.3803 62.5 62.5 62.5Z"
                        fill="white"
                      />
                    </svg>
                  </h3>
                  <h4>Warehouse</h4>
                  <p className="text-center">
                    4000 Greenbriar Dr. Ste.200, Stafford, TX 77477
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 form-h-p-container">
            <h1>Send Us a Message</h1>
            <p>
              For question comments and suggestion, please use this contact
              form.
            </p>
          </div>
          <div className="col-xl-9" style={{ margin: '50px auto' }}>
            <form>
              <div className="form-group f-l-name-container">
                <input
                  type="text"
                  className="form-control "
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control "
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group email-container">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Email Address"
                />
              </div>

              <div className="form-group phone-container">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Phone Numer"
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control textarera "
                  placeholder="inquiry..."
                  rows="10"
                  style={{ fontSize: '1.1em' }}
                ></textarea>
              </div>

              <div className="form-btn-container d-none d-md-block text-center">
                <button type="submit">Send Message</button>
              </div>
              <div className="form-btn-container d-block d-md-none d-grid text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
