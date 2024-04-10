import React from 'react'
import { Checkbox, Rate, Progress, Divider } from "antd";

const WriteBusinessReview = () => {
  return (
    <section className="write-bsn-rev-container">
      <div>Gullwing Motor</div>
      <Divider />
      <h3>Rate Gullwing Motor</h3>
      <Rate />
      <span className="write-rev-span">
        <h3>Title</h3>
        <input
          type="text"
          placeholder="What is important to people to know"
          className="rev-input"
        />
      </span>

      <span className="write-rev-span">
        <h3>More about your Review</h3>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="what went wrong or what did they do better"
          className="text-area-rev"
        ></textarea>
      </span>

      <span className="write-rev-span">
        <h3>Date of Experience</h3>
        <input type="date" className="rev-date-input" />
      </span>
      <div className='rev-submit-btn'>
        {" "}
        <button>Submit</button>
      </div>
   
    </section>
  );
}

export default WriteBusinessReview
