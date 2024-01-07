import MaxImage from "../assets/Max.webp";
import LunaImage from "../assets/Luna.webp";
export default function SecondPage({
  state,
  setItem: setState,
  handleButtonClick,
}) {
  function updateTheme(e) {
    const newTheme = e.currentTarget.dataset.theme;
    setState({ ...state, theme: newTheme });
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 ">
      <h2 className="items-center justify-center text-slate-900 text-4xl font-bold leading-3">
        Choose your avatar
      </h2>
      <div className="flex gap-10 justify-center items-center text-white font-semibold">
        <div className="w-1/6 space-y-6 hover:scale-105 transition-all duration-300">
          <div
            className="w-full cursor-pointer h-[180px] "
            onClick={updateTheme}
            data-theme="max"
          >
            <img src={MaxImage} alt="avatar" className="w-full" />
          </div>

          <div
            onClick={updateTheme}
            data-theme="max"
            className={`cursor-pointer mx-auto drop-shadow-md flex justify-center items-center rounded-md text-center py-2 w-20 ${
              state.theme === "luna"
                ? "bg-max border-blue-400"
                : "bg-blue-500 border-max"
            }`}
          >
            Max
          </div>
        </div>
        <div className="w-1/6 space-y-6 hover:scale-105 transition-all duration-300">
          <div
            className="w-full cursor-pointer h-[180px] "
            onClick={updateTheme}
            data-theme="luna"
          >
            <img src={LunaImage} alt="avatar" className="w-full" />
          </div>
          <div
            onClick={updateTheme}
            data-theme="luna"
            className={`cursor-pointer drop-shadow-md mx-auto flex justify-center items-center rounded-md text-center py-2 w-20 ${
              state.theme === "max"
                ? " bg-fuchsia-300 border-fuchsia-600"
                : " bg-fuchsia-600 border-fuchsia-300"
            }`}
          >
            Luna
          </div>
        </div>
      </div>
      <div
        className="flex bg-fuchsia-800 text-white hover:text-fuchsia-800  hover:bg-white hover:border-fuchsia-800 hover:border font-bold px-6 py-4 mt-2 rounded-md justify-center items-center text-xl cursor-pointer"
        onClick={handleButtonClick}
      >
        Start the game
      </div>
    </div>
  );
}
