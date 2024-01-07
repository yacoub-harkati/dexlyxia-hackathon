export default function Container({ children, className, state }) {
  return (
    <div
      className={`p-2 flex items-center justify-center ${state.currentPage < 2 ? "h-screen" : "h-5/6"} ${className}`}
    >
      {children}
    </div>
  );
}
