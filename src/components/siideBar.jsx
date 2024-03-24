import '../index.css';
import '../../stylesheets/sidebar.css';
import Player from './Player';

export default function SideBar({ showForm, vList, updateUlr, deleteHandler }) {
  return (
    <div className='sidebar'>
      <button type='button' className='create' onClick={() => showForm(true)}>
        Create
      </button>
      <Player videoList={vList} updateUlr={updateUlr} deleteHandler={deleteHandler} />
    </div>
  );
}
