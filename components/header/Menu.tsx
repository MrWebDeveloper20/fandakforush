'use client'
import useCartService from '@/lib/hooks/useCartStore'
// import useLayoutService from '@/lib/hooks/useLayout'
import { signIn, signOut, useSession } from 'next-auth/react'

import Link from 'next/link'
import { useEffect, useState } from 'react'
// import { SearchBox } from './SearchBox'

const Menu = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' })
    init()
  }

  const { data: session } = useSession()

  // const { theme, toggleTheme } = useLayoutService()

  const handleClick = () => {
    ;(document.activeElement as HTMLElement).blur()
  }

  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link className="btn btn-ghost rounded-btn text-xl vazir" href="/cart">
           سبد خرید
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}{' '}
              </div>
            )}
          </Link>
        </li>
        {session && session.user ? (
            <>
              <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost rounded-btn text-xl">
                    {session.user.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 "
                  >
                    <li className='text-xl'>
                      <Link href="/order-history">Order History</Link>
                    </li>
                    <li className='text-xl'>
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li onClick={handleClick} className='vazir text-xl'>
                      <button type="button" onClick={signoutHandler}>
                        خروج
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : (
            <li>
              <button
                className="btn text-xl btn-ghost rounded-btn vazir"
                type="button"
                onClick={() => signIn()}
              >
                ورود
              </button>
            </li>
          )}
        <li>
          <button
            className="btn btn-ghost rounded-btn vazir"
            type="button"
            onClick={() => signIn()}
          >
            ثبت نام
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
