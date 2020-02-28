import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Header from "../components/Header";
import VideoDetail from "../components/VideoDetail";


const Index = ({ data }) => {
  const [videos, setVideos] = useState([]);
  const [numberVideo, setNumberVideo] = useState(2);
  const [keywords, setKeywords] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loadMore = () => {
    setNumberVideo(numberVideo + 2);
  };

  const handleChange = e => {
    setKeywords(e.target.value);
  };

  useEffect(() => {
    setVideos(data);
  });

  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
      </Head>

      <Header handleChange={handleChange} />

      <div className="wrap-content">
        {videos.slice(0, numberVideo).map((video, index) => {
          if (video.name.toLowerCase().includes(keywords.toLowerCase())) {
            return (
              <div key={index} className="content">
                <div className="section-left">
                  <img src={video.img} />
                  <span>{video.time}</span>
                </div>
                <div className="section-right">
                  <h3>
                    {video.id}-{video.name}
                  </h3>
                  <p>{video.description}</p>
                  <VideoDetail video={video} />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}

        {numberVideo < videos.length && (
          <button onClick={loadMore} type="button" className="load-more">
            Xem thêm
          </button>
        )}
      </div>
    </>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('https://linxhq-fake-api.herokuapp.com/videoList');
  const data = await res.json();

  return {
    data
  };
};

export default Index;
