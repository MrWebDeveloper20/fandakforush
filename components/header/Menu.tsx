'use client'
import useCartService from '@/lib/hooks/useCartStore'
// import useLayoutService from '@/lib/hooks/useLayout'
// import { signIn, signOut, useSession } from 'next-auth/react'

import Link from 'next/link'
import { useEffect, useState } from 'react'
// import { SearchBox } from './SearchBox'

const Menu = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  // const signoutHandler = () => {
  //   signOut({ callbackUrl: '/signin' })
  //   init()
  // }

  // const { data: session } = useSession()

  // const { theme, toggleTheme } = useLayoutService()

  const handleClick = () => {
    ;(document.activeElement as HTMLElement).blur()
  }

  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          {/* <Link className="btn btn-ghost rounded-btn text-xl vazir" href="/cart">
           سبد خرید
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}{' '}
              </div>
            )}
          </Link> */}
        </li>
        
            <>
              <li>
                
              </li>
            </>
     
            <li>
              {/* <button
                className="btn text-xl btn-ghost rounded-btn vazir"
                type="button"
                // onClick={() => signIn()}
              >
                ورود
              </button> */}
            </li>
         
        <li>
          {/* <button
            className="btn btn-ghost rounded-btn vazir"
            type="button"
            // onClick={() => signIn()}
          >
            ثبت نام
          </button> */}
        </li>
      </ul>
    </div>
  )
}

export default Menu
