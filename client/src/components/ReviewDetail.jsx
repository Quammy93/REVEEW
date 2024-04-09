import React from 'react'
import { Checkbox,Rate ,Progress,Divider} from "antd";
import { IoFilter } from "react-icons/io5";

const ReviewDetail = () => {


    const plainOptions = ["5", "4", "3", "2", "1",];
    



const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);}

  return (
    <div>
      <h2>
        Reviews{" "}
        <span>
          <Rate value={4} defaultValue={4} />
        </span>
      </h2>
      <span>69,791 total reviews</span>

      <main className="review-detail-container">

        <span className='rev-rate'>4.5</span>
        <section>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Apple"]}
            onChange={onChange}
            className="check check1"
          />
        </section>
        <section className="div-section">
          <span className="span-pro">
            {" "}
            <Progress percent={100} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{19}</span>
          </span>
          <span className="span-pro">
            {" "}
            <Progress percent={30} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{19}</span>
          </span>
          <span className="span-pro">
            {" "}
            <Progress percent={50} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{19}</span>
          </span>
          <span className="span-pro">
            {" "}
            <Progress percent={100} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{19}</span>
          </span>
          <span className="span-pro">
            {" "}
            <Progress percent={10} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{19}</span>
          </span>

          {/**   <div className="div">
            {" "}
            <div className="div2"></div>
          </div>
          <div className="div"></div>
          <div className="div"></div>
          <div className="div"></div>
          <div className="div"></div> */}
        </section>
      </main>
      <Divider className="divider-rev" />

      <div className="bsn-rev-foot-1">
        {" "}
        <span className="span-padding">Filter <span><IoFilter/></span></span>{" "}
        <span>
          {" "}
          Sort{" "}
          <span className="span-padding">
            <select name="" id="">
              <option value="Most Review">Most Review</option>
              <option value="Most Review">Most Review</option>
            </select>
          </span>
        </span>
      </div>
      <div className="bsn-rev-foot-2">
        <span className="span-padding x-star">5-star X</span>
        <span className="span-padding x-star">4-star X</span>
        <span className="span-padding x-star">3-star X</span>
        <span className="span-padding x-star">2-star X</span>
        <span className="span-padding x-star">1-star X</span>
      </div>
    </div>
  );
}

export default ReviewDetail
