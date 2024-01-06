export default function Container({ children, className }) {
  return (
    <div
      className={`p-2 flex items-center justify-center h-4/6 ${className}`}
    >
      {children}
    </div>
  );
}
