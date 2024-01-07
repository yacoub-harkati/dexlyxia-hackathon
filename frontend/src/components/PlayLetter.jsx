import { MdVolumeUp } from "react-icons/md";
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

export default function PlayLetter({ letter, className, state}) {
  const handlePlayLetter = (e) => {
    e.preventDefault();
    const sound = sounds[letter];
    const audio = new Audio(sound);
    state.isMuted && audio.play();
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
``;
