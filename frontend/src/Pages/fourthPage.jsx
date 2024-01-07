import sampleCatImage from "../assets/Sample.png";
import { MdVolumeUp } from "react-icons/md";
import LetterCard from "../components/LetterCard";
import PlayLetter from "../components/PlayLetter";

export default function FourthPage({ state, setState }) {
  function playCorrectWordSound(e) {}

  function handleSuccess(word) {
    console.log("Success", word);
  }
  function handleFailure(word) {
    console.log("Failure", word);
  }

  function handleOnDrop(e) {
    const letter = e.dataTransfer.getData("letter");
    setState({ ...state, missingLetterPlaceHolder: letter });
    let word_to_process = state.currentWord.split("");
    let word_to_pronounce = null;
    if (state.mod === 0) {
      word_to_process.shift();
      word_to_pronounce = letter + word_to_process.join("");
    } else {
      word_to_process.pop();
      word_to_pronounce = word_to_process.join("") + letter;
    }
    if (word_to_pronounce === state.currentWord) {
      handleSuccess(word_to_pronounce);
    } else {
      handleFailure(word_to_pronounce);
    }
  }
  const colors = ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA"];
  return (
    <div className="flex flex-col gap-10">
      <h2 className="items-center justify-center text-white drop-shadow-sm text-4xl font-bold  text-center">
        Drag and drop the missing letter
      </h2>
      <div className="flex justify-center items-center rounded-lg gap-10">
        <div className="flex justify-center items-center gap-7 flex-col">
          <div className="flex justify-center items-center rounded-lg bg-white h-[400px] w-[400px] cursor-pointer drop-shadow-lg p-20">
            <img
              src={sampleCatImage}
              alt="cat sample image"
              className="w-full"
            />
          </div>
          <div
            className="flex gap-5 justify-center items-center cursor-pointer p-2 bg-white rounded-md min-w-[300px]"
            onClick={playCorrectWordSound}
          >
            <MdVolumeUp size={28} className="text-slate-800" />
            <span className="text-lg font-semibold">Play Sound</span>
          </div>
        </div>
        <div className="flex gap-10 flex-col justify-center items-center">
          <div className="flex gap-2">
            {state.currentWord.split("").map((letter, index) => {
              if (
                (!state.mod && index === 0) ||
                (state.mod === 1 && index === state.currentWord.length - 1)
              ) {
                return (
                  <LetterCard
                    key={index}
                    letter={state.missingLetterPlaceHolder}
                    className=""
                    handleOnDrop={handleOnDrop}
                  />
                );
              }
              return <LetterCard key={index} letter={letter} className="" />;
            })}
          </div>
          <div className="flex gap-2">
            {state.letterToChoose.map((letter, index) => {
              return (
                <div key={index} className="flex gap-5 flex-col items-center">
                  <LetterCard
                    letter={letter}
                    style={{ backgroundColor: colors[index] }}
                  />
                  <PlayLetter key={index} letter={letter} className="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
