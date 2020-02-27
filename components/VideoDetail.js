import Link from 'next/link';

export default ({ video }) => (
  <>
    <Link href={`/video?id=${video.id}`}>
      <a className="detail" title="Xem chi tiet">
        Xem chi tiết &#8594;
      </a>
    </Link>
  </>
);
