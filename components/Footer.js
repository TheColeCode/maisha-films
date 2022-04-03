export default function Footer({ copyrightText }) {
  return (
    <footer className="py-16 flex flex-col items-center">
      <p className="dark:text-white uppercase mb-3 font-bold opacity-60">
        {copyrightText}
      </p>
      <nav>
        <ul className="flex opacity-60">
          <li className="mr-3">
            <a href="https://maishaphotography.com/" target="_blank" rel="noreferrer" title="Maisha Photography">Maisha Photography</a>
          </li>
          <li className="mr-3">|</li>
          <li className="mr-3">
            <a href="https://instagram.com/maishafilms/" target="_blank" rel="noreferrer" title="Instagram of Maisha Films">Maisha Films Instagram</a>
          </li>
          <li className="mr-3">|</li>
          <li className="mr-3">
            <a href="mailto:thecolecode@gmail.com" title="Email Maisha Films">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
