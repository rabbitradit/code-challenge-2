// components/Header.js
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="header flex bg-black items-center text-white py-2 gap-10 fixed w-full z-50">
      <div className="logo">
        <Link href="/">
          <Image src="https://www.bandainamco-am.com/ECommerce/site/Themes/images/logo.png" alt="Bandai Namco Logo" width={120} height={100} />
        </Link>
      </div>
      <nav>
        <ul className='flex gap-5 font-bold'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/games">Games</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/team">Team</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;