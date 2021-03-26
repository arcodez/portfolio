import React from "react";

export default function Work() {
  {
    /* <div className="slider--item-image">
    <div className="imagen">
      <img
        src="https://radioinfinitagoya.com.ar/v1/wp-content/uploads/2020/06/compras-por-coronavirus.jpg"
        alt="Victory"
        width="191"
        height="300"
      />
    </div>
  </div>; */
  }
  return (
    <li className="l-section section">
      <div className="work">
        <a href="https://github.com/arcodez?tab=repositories">
          <h2>My Projects</h2>
        </a>
        <div className="work--lockup">
          <ul className="slider">
            <li className="slider--item slider--item-right">
              <a href="#0">
                <img
                  src="https://image.freepik.com/free-vector/full-supermarket-shopping-cart-shop-trolley-with-food-grocery-store-icon_53562-8227.jpg"
                  alt="Alex Nowak"
                />
                <p className="slider--item-title">Familiar Shop</p>
                <p className="slider--item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do.
                </p>
              </a>
            </li>
            <li className="slider--item slider--item-center">
              <a href="#0">
                <img
                  src="https://media.istockphoto.com/videos/animation-shopping-cart-icon-with-counter-0100-on-gray-background-video-id1190587036?s=640x640"
                  alt="Shoping Car"
                />
                <p className="slider--item-title">Shoping Car Vanilla JS</p>
                <p className="slider--item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do.
                </p>
              </a>
            </li>
            <li className="slider--item slider--item-left">
              <a href="#0">
                <img
                  src="https://i.pinimg.com/originals/d0/fc/8a/d0fc8a804468e196fae2a7207b435281.jpg"
                  alt=""
                />
                <p className="slider--item-title">Music Store</p>
                <p className="slider--item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do.
                </p>
              </a>
            </li>
          </ul>
          <div className="slider--next">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 150 118"
              style={{ enableBackground: "new 0 0 150 118" }}
              xmlSpace="preserve"
            >
              <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
              </g>
            </svg>
          </div>
          <div className="slider--prev">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 150 118"
              style={{ enableBackground: "new 0 0 150 118" }}
              xmlSpace="preserve"
            >
              <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                <path
                  d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
    c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
    c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
}
