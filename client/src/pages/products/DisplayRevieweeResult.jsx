import React from 'react'
import Navbar4 from '../../components/Navbar4'
import "../../assets/css/displayreview.css"
import { Rate } from "antd";

const DisplayRevieweeResult = () => {
    const desc = ["terrible", "bad", "normal", "good", "wonderful"];
    const [value, setValue] = React.useState(4);
  return (
    <section>
      <Navbar4 />

      <main>
        <p className="link-up">Reveew/Resturant</p>

        <article>
          <div className="display-review-top">
            <h2>Best Restuarants around Lagos</h2>
            <span>
              <label htmlFor="">sort -</label>
              <select name="sort" id="" className="select-sort">
                <option value="Recommended">All</option>
                <option value="Recommended">Recommended</option>
                <option value="most-reviewed">Most Reviewed</option>
                <option value="high-rate">Highest Rating</option>
              </select>
            </span>
          </div>
        </article>
      </main>
      <section>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>1. Bottega</h2>
            <Rate tooltips={desc} onChange={setValue} value={value} /> (100 Reviews)
         
          </div>
        </article>
      </section>
    </section>
  );
}

export default DisplayRevieweeResult
