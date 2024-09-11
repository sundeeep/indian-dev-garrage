import { toast} from 'react-toastify';

const page = () => {
  return (
    <div>
      <button onClick={() => toast("Welcome to the Indian Dev Garrage!")}></button>
    </div>
  )
}

export default page