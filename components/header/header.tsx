import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Menu from './Menu'

const Header = () => {
  return (
    <header>
      <nav className='h-28 '>
        <div className="navbar flex justify-end items-center bg-base-300 h-28 my-auto">
          <Link href="/" className="vazir flex justify-center items-center  text-lg">
            <div className='flex flex-col items-center mr-2'>
              <h1 className=''>فندک فروش</h1>
              <h2 className='text-blue-500'>ما فندک بازا رو سورپرایز می کنیم</h2>
            </div>
            <Image className='rounded-lg' src={'/images/logo.png'} alt='' width={90} height={90}/>
          </Link>
          {/* <Menu /> */}
        </div>
      </nav>
    </header>
  )
}

export default Header
