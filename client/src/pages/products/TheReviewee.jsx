import React from "react";
import Navbar2 from "../../components/Navbar2";
import "../../assets/css/thereviewee.css";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import reviewee from "../../assets/images/reviewee1.jpg";
import cake from "../../assets/images/cake1.jpg";
import { Rate } from "antd";
import Footer from "../../components/Footer";
import ServiceCategory from "../../components/ServiceCategory";
import Location from "../../components/Location";
import { useGlobalContext } from "../../utils/context";
const TheReviewee = () => {
  const {
    serviceCategory,
    setServiceCategory,
    serviceLocation,
    setServiceLocation,
    isServiceContainerOpen,
    setIsServiceContainerOpen,
  } = useGlobalContext();
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = React.useState(0);
 
  return (
    <div>
      <Navbar2 />
      <div className="reviewee-container">
        <main>
          <h2>Find a business to review</h2>
          <h4>
            Review anything from your favorite patio spot to your local flower
            shop.
          </h4>
          <form action="" className="reviewee-form">
            <div className="therevieweeinput">
              <aside>
                {" "}
                <input
                  type="text"
                  placeholder="try resturants,hotel..."
                  className="find-reviewee-inpt1"
                  autoFocus={false}
                  
                  name="serviceCategory"
                  value={serviceCategory}
                  
                  onChange={(e) => setServiceCategory(e.target.value)}
                  onClick={setIsServiceContainerOpen(true)}
                  
                 
                />
              </aside>
              <input
                type="text"
                className="find-reviewee-inpt2"
                placeholder="location"
                name="serviceLocation"
                value={serviceLocation}
                onChange={(e) => setServiceLocation(e.target.value)}
              />{" "}
              <span className="reviewee-icon-div">
                <IoSearch className="reviewee-icon" />
              </span>
            </div>
          </form>
          <ServiceCategory />
          <Location />
        </main>
        <div className="reviewee-image">
          <img src={reviewee} alt="" className="reviewee-illus" />
        </div>
      </div>
      <section className="reviewee-section">
        <h3>Visited one of these places recently?</h3>
        <div className="visited-container">
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
          <article className="visited-article">
            <div>
              <img src={cake} alt="" className="visited-image" />
            </div>
            <div className="visited-desc">
              {" "}
              <h3>Grandma's </h3>
              <p>Do you recommend this business?</p>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </div>
            <span>
              <MdClose className="close-visited" />
            </span>
          </article>
        </div>
      </section>
      <span>Show more suggestions</span>
      <Footer />
    </div>
  );
};

export default TheReviewee;
