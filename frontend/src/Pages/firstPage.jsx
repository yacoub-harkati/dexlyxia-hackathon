import { MdKeyboardArrowRight } from "react-icons/md";

export default function FirstPage({
  state,
  setItem: setState,
  handleButtonClick,
}) {
  function handleChildNameChange(e) {
    setState({ ...state, childName: e.target.value });
  }

  return (
    <div className="w-[700px] flex flex-col gap-5 items-center">
      <div className="w-full flex flex-col gap-5 items-center">
        <h2 className="text-slate-900 text-2xl font-bold leading-3">
          Enter your kid's name
        </h2>
        <input
          type="text"
          className="w-full border border-fuchsia-600 rounded-md p-4 outline-none mt-2 max-w-[400px] drop-shadow-md"
          placeholder="Enter your child's name"
          onChange={handleChildNameChange}
        ></input>
        <h2 className="text-slate-900 text-2xl font-bold leading-3 mt-5">
          Enter your kid's birthday
        </h2>

        <input
          type="date"
          className="w-full border border-fuchsia-600 rounded-md p-4 outline-none mt-2 drop-shadow-md max-w-[250px]"
          onChange={(e) => setState({ ...state, birthDay: e.target.value })}
        ></input>
      </div>
      <div
        className="flex bg-fuchsia-800 text-white font-bold px-4 py-2 mt-2 rounded-md justify-center items-center text-xl cursor-pointer"
        onClick={handleButtonClick}
      >
        <button>Next</button>
        <MdKeyboardArrowRight size={30} />
      </div>
    </div>
  );
}
