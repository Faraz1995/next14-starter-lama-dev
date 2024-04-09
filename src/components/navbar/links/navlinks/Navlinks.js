"use client"
import { usePathname } from 'next/navigation'
import styles from './navlink.module.css'
import Link from 'next/link'

function Navlinks({item}) {
  const pathname = usePathname()
  return (
      <Link className={`${styles.container} ${pathname===item.path && styles.active}`} key={item.path} href={item.path}>{item.title}</Link>
  )
}

export default Navlinks