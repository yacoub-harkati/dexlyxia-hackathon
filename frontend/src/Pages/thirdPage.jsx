import React, { useState, useRef } from 'react';
import { MdOutlineMicOff, MdOutlineMicNone } from 'react-icons/md';

export default function ThirdPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const mediaRecorderRef = useRef(null);

  const handleMicClick = async () => {
    if (isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();

        mediaRecorder.ondataavailable = (e) => {
          const audioBlob = new Blob([e.data], { 'type': 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);
        };

        setIsRecording(true);
      } catch (err) {
        console.error('Error accessing your microphone', err);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="items-center justify-center text-white drop-shadow-sm text-4xl font-bold text-center">
          Pronounce the letter C
        </h2>
        <div
          className="flex justify-center items-center rounded-lg bg-white h-[300px] w-[300px] cursor-pointer drop-shadow-lg"
          onClick={() => {
            if (audioUrl) {
              const audio = new Audio(audioUrl);
              audio.play();
            }
          }}
        >
          <p className="text-7xl">C</p>
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
        {audioUrl && (
          <audio src={audioUrl} controls />
        )}
      </div>
    </div>
  );
}
