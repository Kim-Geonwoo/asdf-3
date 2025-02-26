import GitHubButton from "react-github-btn";

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
      <footer className="w-full bg-black text-white flex items-center justify-center py-3">
        <GitHubButton
          aria-label="Star Kim-Geonwoo/asdf-3 on GitHub"
          data-color-scheme="no-preference: dark; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          href="https://github.com/Kim-Geonwoo/asdf-3"
        >
          Star
        </GitHubButton>
        <p className="ml-3">:)</p>
      </footer>
    </div>
  );
}
