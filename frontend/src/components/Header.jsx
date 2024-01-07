import Star from "../assets/star.png";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

export default function Header({ state, setState }) {
  function handleMute(e) {
    e.preventDefault();
    setState({ ...state, isMuted: !state.isMuted });
  }

  return (
    <div className="w-full p-5">
      <div className="flex gap-3 items-center justify-start">
        <div className="bg-white rounded-full flex items-center justify-center space-x-3 min-w-28 px-4 py-2 h-14">
          <img src={Star} alt="star" className="inline-block h-7" />
          <span className="inline-block font-semibold text-2xl">
            {state.score}
          </span>
        </div>
        <div
          className="rounded-full bg-white p-2 flex justify-center items-center cursor-pointer h-14 w-14"
          onClick={handleMute}
        >
          {!state.isMuted ? (
            <MdVolumeOff size={42} className="text-slate-800" />
          ) : (
            <MdVolumeUp size={42} className="text-slate-800" />
          )}
        </div>
      </div>
    </div>
  );
}
