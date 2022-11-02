import Link from 'next/link'
import style from './main-header.module.css'
function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}><Link href='/'>NextEvents</Link></div>
      <nav >
         <ul className={style.navigation}>
            <li>
                <Link  href='/events'>All Events</Link>
            </li>
         </ul>
      </nav>
    </header>
  )
}

export default Header