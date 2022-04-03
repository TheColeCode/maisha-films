import Link from 'next/link';
import Logo from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20">
      <p className="text-2xl dark:text-white text-center">
        <Link href="/"> 
          <a><Logo src='/Maisha-Films-Logo.png' alt="Maisha Films Logo" title="Maisha Films - Home" width="160px" height="160px" /></a>
        </Link>
      </p>
      {/* <nav>
      <Link href="/"> 
        <a>IMdb</a>
      </Link>
      </nav> */}
    </header>
  );
}
