import React from "react";
import { Checkbox, Rate, Progress, Divider } from "antd";
import { IoFilter } from "react-icons/io5";

import { connect } from "react-redux";
import { SET_REVIEW_CHECKED, SET_REVIEW_SORTED } from "../redux/action";

const ReviewDetail = ({
  rating,
  revNum,
  cent5,
  cent4,
  cent3,
  cent2,
  cent1,
  revN1,
  revN2,
  revN3,
  revN4,
  revN5,
  reviewQueried,
  setReviewChecked,
  setReviewSorted,
}) => {
  const plainOptions = ["5", "4", "3", "2", "1"];

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setReviewChecked(checkedValues);
  };

  return (
    <div className="review-detail-main-container">
      <h2>
        Reviews{" "}
        <span>
          <Rate value={rating} defaultValue={rating} />
        </span>
      </h2>
      <span>{revNum} total reviews</span>

      <main className="review-detail-container">
        <span className="rev-rate-review-detail">{rating}</span>
        <section>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={[""]}
            onChange={onChange}
            className="check check1"
          />
        </section>
        <section className="div-section">
          <span className="span-pro">
            {" "}
            <Progress percent={cent5} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{revN5}</span>
          </span>
          <span className="span-pro">
            {" "}
            <Progress percent={cent4} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{revN4}</span>
          </span>
          <span className="span-pro">
            {" "}
            <Progress percent={cent3} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{revN3}</span>
          </span>
          <span className="span-pro">
            {" "}
            <Progress percent={cent2} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{revN2}</span>
          </span>
          <span className="span-pro">
            {" "}
            <Progress percent={cent1} showInfo={false} className="progress1" />
            <span className="rate-num-rating1">{revN1}</span>
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
        <span className="span-padding">
          Filter{" "}
          <span>
            <IoFilter />
          </span>
        </span>{" "}
        <span>
          {" "}
          Sort{" "}
          <span className="span-padding">
            <select
              name=""
              id=""
              onChange={(e) => {
                setReviewSorted(e.target.value);
              }}
            >
              <option value="Most Review">Most Review</option>
              <option value="Most Liked">Most Liked</option>
              <option value="Most Flaged">Most Flaged</option>
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
};

const mapStateToProps = (state) => {
  return {
    reviewQueried: state.appFunctions.reviewQueried,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setReviewChecked: (checked) =>
      dispatch({
        type: SET_REVIEW_CHECKED,
        payload: { checked: checked },
      }),
    setReviewSorted: (sorted) =>
      dispatch({
        type: SET_REVIEW_SORTED,
        payload: { sorted: sorted },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetail);
