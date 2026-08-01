import {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='bg-slate-900 text-white sticky top-0 z-50 shadow-md'>
        <nav className='max-w-6xl mx-auto flex items-center justify-between px-4 py-3 '>
            <Link to="/" className='text-xl font-bold tracking-tight hover:text-blue-400 transition-colors'>
            Movie Explorer Pro
            </Link>

             {/* DESKTOP MENU — visible on medium screens and up, hidden on mobile */}
        <ul  className='hidden md:flex items-center gap-6'>
            <li>
                <Link to="/"  className='block hover:text-blue-400 transitions-colors'>Home</Link>
            </li>
            <li>
                <Link to="/search" className='block hover:text-blue-400 transitions-colors'>Search</Link>
            </li>
            <li>
                <Link to="/about" className='block hover:text-blue-400 transitions-colors'>About</Link>
            </li>
        </ul>

          {/* HAMBURGER BUTTON — visible on mobile only */}
        <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        
        className='md:hidden text-2xl'>
            {isMenuOpen ? '✕' : '☰'}
        </button>
        </nav>

           {/* MOBILE DROPDOWN — only exists in the page when isMenuOpen is true */}
           {isMenuOpen && (
            <ul className="md:hidden flex flex-col gap-4 px-4 pb-4">
                <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className='block hover:text-blue-400 transitions-colors'>Home</Link>
                </li>
                <li>
                    <Link to="/search" onClick={() => setIsMenuOpen(false)} className='block hover:text-blue-400 transitions-colors'>Search</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className='block hover:text-blue-400 transitions-colors'>About</Link>
                </li>
            </ul>
           )}
    </header>
  )
}

export default Navbar