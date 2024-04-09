'use client'
import React,{useState} from 'react'
import styles from './links.module.css'
import Navlinks from './navlinks/Navlinks';

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];


function Links() {
  const [open, setOpen] = useState(false)
console.log(open);
  const session = true
  const isAdmin = true
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlinks key={link.path} item={link} />
        ))}{' '}
        {session ? (
          <>
            {isAdmin && <Navlinks item={{ title: 'admin', path: '/admin' }} />}
            <button className={styles.logout}>logout</button>
          </>
        ) : (
          <Navlinks item={{ title: 'login', path: '/login' }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          <>
            {links.map((link) => (
              <Navlinks key={link.href} item={link} />
            ))}
          </>
        </div>
      )}
    </div>
  )
}

export default Links