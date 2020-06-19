import React, { useState, useEffect } from "react";
import "./style.scss";
import dummyData from "../../dummydata";
import CardList from "./CardList";

const CardHolder = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {videos.map((list, index) => {
        return (
          <section key={index}>
            <h2 className="section-title">{list.section}</h2>
            <CardList list={list} />
            <hr />
          </section>
        );
      })}
    </div>
  );
};
export default CardHolder;
