import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className='p-2 space-y-2 mb-4'>
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline rounded-md w-full normal-case">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline rounded-md w-full normal-case">
          <FaGithub></FaGithub>
          Login with GitHub
        </button>
      </div>
      <div className='p-2 mb-4'>
        <h2 className="text-2xl mb-2 font-bold">Find Us On</h2>
        <a className="p-4 flex text-lg items-center border rounded-t-lg gap-2" href=''>
          <FaFacebookF></FaFacebookF>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border-x gap-2" href=''>
          <FaTwitter></FaTwitter>
          Twitter
        </a>
        <a className="p-4 flex text-lg items-center border rounded-b-lg gap-2" href=''>
          <FaInstagram></FaInstagram>
          Instagram
        </a>
      </div>

      {/* q zone */}
      <div className='p-2 space-y-2 mb-4'>
        <h2 className="text-2xl font-bold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
