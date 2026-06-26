import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">
      {children}
    </main>
  );
}