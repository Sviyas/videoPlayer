import '../../stylesheets/videoList.css';

export default function VideoList({ list, updateUlr, onDeleteHandler }) {
  const updateUrlList = () => {
    // ? get the url id
    const urlId = list.url.split('/')[3];
    updateUlr(urlId);
  };

  const onDeleteVideo = () => {
    // this is list going to be delete on the array
    onDeleteHandler(list.profile);
  };

  return (
    <div className='video-li'>
      <label id='profile-name'>{list.profile}</label>

      <button id='play' onClick={() => updateUrlList()}>
        Play
      </button>
      <button id='delete' onClick={() => onDeleteVideo()}>
        Delete
      </button>
    </div>
  );
}
