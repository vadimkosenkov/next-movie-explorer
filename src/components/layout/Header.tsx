export default function Header() {
  return (
    <header
      className="
        border-b
      border-zinc-200
      bg-white
      text-zinc-900
      dark:border-zinc-800
      dark:bg-zinc-950
      dark:text-white
  "
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <h1 className="text-xl font-bold">🎬 Movie Explorer</h1>
      </div>
    </header>
  );
}