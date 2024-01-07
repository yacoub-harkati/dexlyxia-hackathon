export default function LetterCard({
  state,
  setState,
  letter,
  className,
  style,
  handleOnDrop = null,
}) {
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDragStart(e) {
    e.dataTransfer.setData("letter", letter);
  }
  function handleDragEnd(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div
      style={style}
      onDrop={handleOnDrop}
      draggable
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      className={`h-[100px] w-[100px] rounded-lg p-4 flex justify-center items-center bg-white shadow-lg text-5xl cursor-pointer ${className}`}
    >
      {letter}
    </div>
  );
}
