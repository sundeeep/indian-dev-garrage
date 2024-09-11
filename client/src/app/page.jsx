"use client";
import { toast} from 'react-toastify';

const HomePage = () => {
  const notify = () => {
    toast("Welcome to the Indian Dev Garrage!");
  }
  return (
    <div>
      <button onClick={notify}>Welcome</button>
    </div>
  )
}

export default HomePage