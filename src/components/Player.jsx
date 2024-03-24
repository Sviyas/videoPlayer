import '../../stylesheets/videoList.css';
import VideoList from './videoList';

export default function Player({ videoList, updateUlr, deleteHandler }) {
  const updateNewList = name => {
    const newList = videoList.filter(l => l.profile !== name);

    deleteHandler(newList);
  };

  return (
    <div className='player'>
      {videoList.map((l, i) => (
        <VideoList key={i} list={l} updateUlr={updateUlr} onDeleteHandler={updateNewList} />
      ))}
    </div>
  );
}
