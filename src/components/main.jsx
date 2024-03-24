import { useEffect, useState } from 'react';
import SideBar from './siideBar';
import GetUrlFUser from './getUrl';
import Video from './videoPlayer';

export default function Main() {
  const [urlForm, setUrlForm] = useState(false);
  const [form, setUserForm] = useState({});
  const [profiler, setProfiler] = useState([]);
  const [getUrlFromUser, setUrl] = useState('');

  useEffect(() => {
    if (Object.keys(form).length !== 0) {
      setProfiler([...profiler, form]);
    }
  }, [form]);

  return (
    <div className='container'>
      <SideBar showForm={setUrlForm} vList={profiler} updateUlr={setUrl} deleteHandler={setProfiler} />
      {urlForm === true ? <GetUrlFUser showForm={setUrlForm} getForm={setUserForm} /> : ''}
      {<Video url={getUrlFromUser} />}
    </div>
  );
}
