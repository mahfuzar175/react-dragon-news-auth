import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex p-4 bg-slate-100">
      <button className="btn btn-secondary bg-[#D72050] px-7 py-3 normal-case rounded-sm">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={50}>
        <Link className="mr-12 text-black" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
