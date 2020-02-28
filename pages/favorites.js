import fetch from 'isomorphic-unfetch';
import axios from "axios"
import { useEffect, useState } from "react"
import VideoDetail from "../components/VideoDetail"

const FavoritesList = () => {
    const [data, setData] = useState([]);

    const onRemoveItem = (id) => {
        axios({
          method: 'delete',
          url: `https://linxhq-fake-api.herokuapp.com/favoritesList/${id}`,
        });
    }

    useEffect(() => {
      axios
        .get('https://linxhq-fake-api.herokuapp.com/favoritesList')
        .then(function(res) {
          setData(res.data)
        })
        .catch(function(error) {
          console.log(error);
        });
    });

  return (
    <>
      <h1>Danh sách yêu thích</h1>
      {data.length > 0 ? (
        <div className="container">
          {data.map((video, index) => {
            return (
              <div key={index} className="video-item">
                <img src={video.img} />
                <span>{video.time}</span>
                <h3>{video.name}</h3>
                <VideoDetail video={video} />
                <button
                  className="btn-remove"
                  onClick={() => onRemoveItem(video.id)}
                >
                  Xoá
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <i className="empty">Bạn chưa có video trong danh sách yêu thích</i>
      )}
      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        h1 {
          text-align: center;
        }
        .empty {
          text-align: center;
          display: block;
          margin-top: 50px;
        }
        .video-item {
          width: 30%;
          text-align: center;
          border: 1px solid #f2f2f2;
          position: relative;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        .video-item img {
          width: 100%;
          height: auto;
        }
        .video-item span {
          background-color: darkslategrey;
          color: #fff;
          padding: 5px 10px;
          position: absolute;
          right: 0px;
          bottom: 175px;
        }
        .video-item button {
          padding: 10px 20px;
          border-radius: 10px;
          outline: none;
          margin-top: 15px;
          cursor: pointer;
        }
        .video-item button:hover {
            color: #fff;
            background-color: tomato;
        }
        .video-item h3 {
            padding: 0 20px;
            text-align: left;
        }
      `}</style>
    </>
  );
};


export default FavoritesList;
