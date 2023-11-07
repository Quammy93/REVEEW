import React from "react";

//simport { feeds } from "../utils/jsonFiles/feeds";
import "../assets/css/feed.css";
import imag1 from "../assets/images/computer-1.jpeg";
import { BiDislike, BiLike, BiComment } from "react-icons/bi";
import { Badge } from "antd";
import { useGlobalContext } from "../utils/context";
import { Alert, Space, Spin } from "antd";

import { getAllFeeds } from "../utils/axios";

const Feeds = () => {
  const { feeds, setFeeds } = useGlobalContext();
  const [isfeedLoading, setIsFeedLoading] = React.useState(false);
  //setLoading(true);

  // Use an async function to fetch data
  const fetchData = async () => {
    setIsFeedLoading(true);
    try {
      const response = await getAllFeeds();
      await setFeeds(response.data.feeds);
      setIsFeedLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (


    
    <div style={{ paddingBottom: "80px" }}>
      {isfeedLoading && (
        <div className="content-style">
          <Space
            direction="vertical"
            style={{
              width: "100%",
              
            }}className="spinner"
          >
            <Spin tip="Loading" size="large" >
              <div className="content " />
            </Spin>{" "}
          </Space>
        </div>
      )}
      {!isfeedLoading && feeds.length == [] && <div>No Feed Found</div>}

      {!isfeedLoading && feeds.length > 0 && (
        <div className="feed-container">
          {feeds?.map((feed) => {
            // console.log(feed);
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
        </div>
      )}
    </div>
  );
};

export default Feeds;
