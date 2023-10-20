import React from "react";

//simport { feeds } from "../utils/jsonFiles/feeds";
import "../assets/css/feed.css";
import imag1 from "../assets/images/computer-1.jpeg";
import { BiDislike, BiLike, BiComment } from "react-icons/bi";
import { Badge } from "antd";

import { getAllFeeds } from "../utils/axios";

const Feeds = () => {
  // const { newFeeds } = useGlobalContext();
  const [feeds, setFeeds] = React.useState([]);

  React.useEffect(() => {
    // Use an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await getAllFeeds();
        setFeeds(response.data.feeds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log;
  return (
    <>
    <p>Feeds</p>
      {feeds.map((feed) => {
        console.log(feed);
        const {
          _id,
          date_posted,
          poster,
          feed_img,
          content,
          title,
          poster_img,
          read_time,
        } = feed;
     

        return (
          <article key={_id} className="article-container">
            <main className="feed-heading">
              <div className="poster">
                <img src={poster_img} alt="" className="poster-image" />
                <span>{poster}</span>
              </div>
              <div>
                
                <span className="read-time">{read_time}</span>
              </div>
            </main>

            <section className="article">
              <main className="heading">
                <h4 className="title">{title}</h4>
                <article className="content">
                  {content.substring(0, 250)}
                </article>
              </main>
              <img src={feed_img} alt="" className="feed-image" />
            </section>
            <div className="article-footer">
              {/*
     <span>
       <Badge count={10} style={{ fontSize: 10, padding: "0px" }}>
         <BiLike style={{ fontSize: 24, cursor: "pointer" }} />
       </Badge>
     </span>

     <Badge count={4} style={{ fontSize: 9, padding: "0px" }}>
       <BiDislike style={{ fontSize: 24, cursor: "pointer" }} />
     </Badge>
     <span>
       <BiComment />
     </span>
     * */}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Feeds;
