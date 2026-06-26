export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-4 text-center text-sm text-zinc-500">
      Movie Explorer © {new Date().getFullYear()}
    </footer>
  );
}