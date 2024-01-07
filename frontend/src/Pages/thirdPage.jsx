import React, { useState, useRef } from "react";
import { MdOutlineMicOff, MdOutlineMicNone } from "react-icons/md";
import a from "../assets/sounds/a.mp3";
import b from "../assets/sounds/b.mp3";
import c from "../assets/sounds/c.mp3";
import d from "../assets/sounds/d.mp3";
import e from "../assets/sounds/e.mp3";
import f from "../assets/sounds/f.mp3";
import g from "../assets/sounds/g.mp3";
import h from "../assets/sounds/h.mp3";
import i from "../assets/sounds/i.mp3";
import j from "../assets/sounds/j.mp3";
import k from "../assets/sounds/k.mp3";
import l from "../assets/sounds/l.mp3";
import m from "../assets/sounds/m.mp3";
import n from "../assets/sounds/n.mp3";
import o from "../assets/sounds/o.mp3";
import p from "../assets/sounds/p.mp3";
import q from "../assets/sounds/q.mp3";
import r from "../assets/sounds/r.mp3";
import s from "../assets/sounds/s.mp3";
import t from "../assets/sounds/t.mp3";
import u from "../assets/sounds/u.mp3";
import v from "../assets/sounds/v.mp3";
import w from "../assets/sounds/w.mp3";
import x from "../assets/sounds/x.mp3";
import y from "../assets/sounds/y.mp3";
import z from "../assets/sounds/z.mp3";
import greatjob from "../assets/sounds/greatjob.mp3";
import tryagain from "../assets/sounds/sorry.mp3";
import axios from "axios";

const sounds = {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
};

export default function ThirdPage({ state, setState, handleButtonClick }) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const mediaRecorderRef = useRef(null);

  const handleMicClick = async () => {
    if (isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();

        mediaRecorder.ondataavailable = async (e) => {
          const audioBlob = new Blob([e.data], { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);
          const audio = new Audio(audioUrl);
          const formData = new FormData();
          formData.append("audio", audioBlob, "audio.webm");
          formData.append("game", 1);
          formData.append("child", 1);
          formData.append("expected_response", state.missingLetter);

          audio.onloadedmetadata = async () => {
            console.log(audio.duration);
            formData.append("response_time", 3);

            try {
              const response = await axios.post(
                "http://10.126.77.235/api/game/response/",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
              console.log(response.data);
            } catch (err) {
              console.error("Error sending audio data", err);
            }
          };
        };
        setIsRecording(true);
      } catch (err) {
        console.error("Error accessing your microphone", err);
      }

      if (Math.floor(Math.random() * 3) !== 0) {
        setTimeout(() => {
          const audio = new Audio(greatjob);
          audio.play();
          handleButtonClick();
        }, 3000);
      } else {
        const audio = new Audio(tryagain);
        audio.play();
      }
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="items-center justify-center text-white drop-shadow-sm text-4xl font-bold text-center">
          Pronounce the letter {state.missingLetter.toUpperCase()}
        </h2>
        <div
          className="flex justify-center items-center rounded-lg bg-white h-[300px] w-[300px] cursor-pointer drop-shadow-lg"
          onClick={() => {
            const url = sounds[state.missingLetter.toLowerCase()];
            const audio = new Audio(url);
            audio.play();
          }}
        >
          <p className="text-7xl">{state.missingLetter.toUpperCase()}</p>
        </div>
        <div
          className="h-20 w-20 rounded-full bg-white flex justify-center items-center cursor-pointer"
          onClick={handleMicClick}
        >
          {isRecording ? (
            <MdOutlineMicOff size={42} className="text-slate-800" />
          ) : (
            <MdOutlineMicNone size={42} className="text-slate-800" />
          )}
        </div>
      </div>
    </div>
  );
}
