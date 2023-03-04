import React, { useContext } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import UserContext from "../../utils/Context/UserContext";
import store from "../../utils/Sotre/Store";
import { item_list } from "../../utils/Constant/Constant";
import { Footer } from "../Footer.js/Footer";
import { addItem } from "../../utils/Sotre/cartSlice";
import { PopupModel } from "../../utils/Popup/PopupModel";
export const Home = (props) => {
  const { user } = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  
  const handleAddItem = (data)=>{
      dispatch(addItem(data))
  }
  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Shoaping Factory <strong>for YOU</strong>
                </h1>
                <p>
                  This template is available for 100% free of charge on
                  TemplateMo. Download, modify and use this for your business
                  website.
                </p>
                <br />
                <a href="#about" className="main-button-slider mt-2">
                  Find Out More
                </a>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src="/images/slider-icon.png"
                  className="rounded img-fluid d-block mx-auto"
                  alt="First Vector Graphic"
                />
              </div>
            </div>
          </div>
          <PopupModel/>
          <div className="item-list">
            <div className="container">
            <h5>Selected Cart Items :  {cartItem.length}</h5>
              <div className="row">
                {
                  item_list.map((item,index)=>{
                    return(
                      <div className="col-md-3 card" key={index}>
                      <h5>{item.name}</h5>
                      <b style={{padding:"10px"}}>RS. {item.price}</b>
                      <img src={item.img_url}/>
                      <button className= "btn btn-primary" onClick={()=>handleAddItem(item)}><b>Add Cart</b></button>
                     </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <section className="section" id="about2">
            <div className="container">
              <div className="row">
                <div className="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
                  <div className="left-heading">
                    <h5>Curabitur aliquam eget tellus id porta</h5>
                  </div>
                  <p>
                    Proin justo sapien, posuere suscipit tortor in, fermentum
                    mattis elit. Aenean in feugiat purus.
                  </p>
                  <ul>
                    <li>
                      <img src="/images/about-icon-01.png" alt="" />
                      <div className="text">
                        <h6>Nulla ultricies risus quis risus</h6>
                        <p>
                          You can use this website template for commercial or
                          non-commercial purposes.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src="/images/about-icon-02.png" alt="" />
                      <div className="text">
                        <h6>Donec consequat commodo purus</h6>
                        <p>
                          You have no right to re-distribute this template as a
                          downloadable ZIP file on any website.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src="/images/about-icon-03.png" alt="" />
                      <div className="text">
                        <h6>Sed placerat sollicitudin mauris</h6>
                        <p>
                          If you have any question or comment, please{" "}
                          <a
                            rel="nofollow"
                            href="https://templatemo.com/contact"
                          >
                            contact
                          </a>{" "}
                          us on TemplateMo.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big"
                  data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
                >
                  <img
                    src="/images/right-image.png"
                    className="rounded img-fluid d-block mx-auto"
                    alt="App"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
