import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
