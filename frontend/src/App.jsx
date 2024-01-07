import { useState } from "react";
import Container from "./components/Container";
import FirstPage from "./Pages/firstPage";
import SecondPage from "./Pages/secondPage";
import ThirdPage from "./Pages/thirdPage";
import FourthPage from "./Pages/fourthPage";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState({
    childName: null,
    birthDay: null,
    currentWord: "cat",
    missingLetter: "c",
    missingLetterPlaceHolder: "_",
    mod: 0,
    letterToChoose: ["a", "b", "c" ],
    score: 5000,
    isMuted: false,
    currentPage: 3,
    theme: "max",
    data: [
      {word: "cat", image: "cat.png", sound: "cat.mp3", missingLetter: "c", mod: 0, letterToChoose: ["a", "b", "c" ]},
    ]
  });

  function handleButtonClick() {
    if (state.childName !== null && state.birthDay !== null) {
      if (state.currentPage == 3) {
        setState({ ...state, currentPage: state.currentPage + 1 });
        return;
      }
      setState({ ...state, currentPage: state.currentPage + 1 });
    }
  }

  return (
    <div
      className={`h-screen ${
        state.currentPage < 2
          ? "bg-patterns bg-cover"
          : `${
              state.theme === "max"
                ? "radial-max"
                : state.theme === "luna"
                ? "radial-luna"
                : "bg-patterns"
            } bg-slate-50`
      }`}
    >
      {state.currentPage >= 2 && <Header state={state} setState={setState} />}
      <Container state={state}>
        {state.currentPage === 0 && (
          <FirstPage
            state={state}
            setItem={setState}
            handleButtonClick={handleButtonClick}
          />
        )}
        {state.currentPage === 1 && (
          <SecondPage
            state={state}
            setItem={setState}
            handleButtonClick={handleButtonClick}
          />
        )}
        {state.currentPage === 2 && (
          <ThirdPage
            state={state}
            setState={setState}
            handleButtonClick={handleButtonClick}
          />
        )}
        {state.currentPage === 3 && (
          <FourthPage
            state={state}
            setState={setState}
            handleButtonClick={handleButtonClick}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
