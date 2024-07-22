export function CodeArea() {
  return (
    <div className="w-full h-screen flex">
      <textarea
        className="bg-slate-800 w-full h-full text-white text-6xl font-mono box-border px-2 pt-4 no-scrollbar resize-none"
        autoFocus
      ></textarea>
    </div>
  )
}
