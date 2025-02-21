import { Link } from "@heroui/link";

import { Head } from "./head";

import { Header } from "@/components/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="b relative flex flex-col h-screen">
      <Head />
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        :)
      </footer>
    </div>
  );
}
