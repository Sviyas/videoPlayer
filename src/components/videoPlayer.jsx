import '../../stylesheets/videoplayer.css';

export default function Video({ url }) {
  return (
    <div className='video-pl'>
      <iframe
        src={`https://www.youtube.com/embed/${url}?autoplay=1`}
        className='video-p'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    </div>
  );
}
