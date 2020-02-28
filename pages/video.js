import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { Icon } from "antd"
import axios from "axios";

const VideoDetail = ({ data }) => {

    const handleClick = () => {
        axios({
          method: 'post',
          url: 'https://linxhq-fake-api.herokuapp.com/favoritesList',
          data: {
            name: data.name ,
            srcVideo: data.srcVideo,
            description: data.description,
            img: data.img,
            time: data.time
          }
        });
        setTimeout(function() {
          alert("Đã thêm vào danh sách yêu thích");
        }, 400);
    }

  return (
    <>
      <div className="container">
        <iframe
          width="1000"
          height="500"
          src={data.srcVideo}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="content">
          <div className="left">
            <h2>
              Bài {data.id}: {data.name}
            </h2>
            <p>{data.description}</p>
          </div>
          <div className="right">
            <button onClick={handleClick} className="btn-add">
              <Icon type="heart" theme="filled" title="Thêm vào yêu thích" />
              <span>Thêm vào yêu thích</span>
            </button>
            <Link href="/favorites">
              <button className="btn-view">Danh sách yêu thích</button>
            </Link>
          </div>
        </div>

        <Link href="/">
          <button className="btn-home">Quay lại trang chủ</button>
        </Link>

        <style jsx>{`
          .content {
            display: flex;
            justify-content: space-between;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
          }
          .right {
            flex-grow: 2;
            text-align: center;
            align-self: center;
          }
          .right button {
            cursor: pointer;
            padding: 7px 15px;
            font-size: 14px;
            border-radius: 10px;
            transition: 0.3s;
            outline: none;
          }
          .right .btn-add {
            margin-right: 7px;
          }
          .right .btn-add:hover {
            background-color: #f78194;
            color: #fff;
          }
          .right .btn-add span {
            margin-left: 5px;
          }
          .right .btn-view:hover {
            background-color: rgb(21, 157, 202);
            color: #fff;
          }
          .btn-home {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: poiter;
            transition: 0.4s;
          }
          .btn-home:hover {
            background-color: rgb(41, 157, 202);
            color: #fff;
          }
        `}</style>
      </div>
    </>
  );
};

VideoDetail.getInitialProps = async ({ query }) => {
  const response = await fetch(
    `https://linxhq-fake-api.herokuapp.com/videoList/${query.id}`
  );

  const data = await response.json();
  return { data };
};

export default VideoDetail;
