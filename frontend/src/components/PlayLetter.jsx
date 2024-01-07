import { MdVolumeUp } from "react-icons/md";

export default function PlayLetter({ letter, className }) {
  const handlePlayLetter = (e) => {
    console.log(letter);
  };
  return (
    <div
      className={`h-10 w-10 bg-white rounded-full flex justify-center items-center drop-shadow-lg cursor-pointer ${className}`}
      onClick={handlePlayLetter}
    >
      <MdVolumeUp size={22} className="text-slate-800" />
    </div>
  );
}
