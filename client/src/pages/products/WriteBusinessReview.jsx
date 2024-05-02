import React from "react";
import { Checkbox, Rate, Progress, Divider } from "antd";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
const url = "http://localhost:5000/api";

//const url = "/api";

const WriteBusinessReview = () => {
  const { id } = useParams();
  const [title, setTitle] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [value, setValue] = React.useState(3);
  const [experienceDate, setExperienceDate] = React.useState(Date.now());
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const postFeedBack = async (feedback) => {
    await axios
      .post(`${url}/reviews/${id}?reviewed=business`, { feedback })
      .catch((erro) => {
        console.log(erro);
      });
    console.log("sent successfuly");
  };

  const urlLocation = useLocation();

  const queryName = new URLSearchParams(urlLocation.search).get("queryName");

  const handleSubmit = () => {
    const feedback = {
      title: title,
      comment: comment,
      experienceDate: experienceDate,
      value: value,
    };
    postFeedBack(feedback);
  };

  return (
    <section className="write-bsn-rev-container">
      <div>{queryName}</div>
      <Divider />
      <h3>Rate {queryName}</h3>
      <span>
        <Rate tooltips={desc} onChange={setValue} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </span>
      <span className="write-rev-span">
        <h3>Title</h3>
        <input
          type="text"
          name="title"
          placeholder="What is important to people to know"
          className="rev-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </span>

      <span className="write-rev-span">
        <h3>More about your Review</h3>
        <textarea
          name="comment"
          id=""
          cols="30"
          rows="10"
          placeholder="what went wrong or what did they do better"
          className="text-area-rev"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
      </span>

      <span className="write-rev-span">
        <h3>Date of Experience</h3>
        <input
          type="date"
          name="experienceDate"
          className="rev-date-input"
          value={experienceDate}
          onChange={(e) => {
            setExperienceDate(e.target.value);
          }}
        />
      </span>
      <div className="rev-submit">
        {" "}
        <button className="rev-submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </section>
  );
};

export default WriteBusinessReview;
