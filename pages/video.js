import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const VideoDetail = ({ data }) => {
  return (
    <>
    <div>
      <iframe
        width="1000"
        height="500"
        src={data.srcVideo}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2>
        Bài {data.id}: {data.name}
      </h2>
      <p>{data.description}</p>
      <Link href="/">
        <button>Quay lại trang chủ</button>
      </Link>

      <style jsx>{`
        div {
          max-width: 1000px;
          margin: 0 auto;
        }
        button {
          display: block;
          margin: 20px auto;
          padding: 10px 20px;
          border-radius: 10px;
          cursor: poiter;
          transition: 0.4s;
        }
        button:hover {
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
