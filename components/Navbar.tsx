import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50
    w-full border-b-2 border-black-200 bg-black-100 py-7
    text-white'>
        <div className='flex-between mx-auto w-full 
        max-w-screen-2x1 px-6 xs:px-8 sm:px-16 '>
            <Link href=''>
                <Image 
                className='absolute left-0 top-0 h-55 w-45 -top-5'
                 src="/vinciLogo.svg" 
                alt='logo'
                width={85}
                height={40}
                
                />
            </Link>
            <Image
                src='/hamburger-menu.svg'
                width={30}
                height={30}
                alt='Hamburger menu'
                className='Block md:hidden' 
            />

            <ul className="flex-center gap-x-3 max-md:hidden
            md:gap-x-10" >
                <li className='body-text 
                text-gradient_blue-purple !font-bold'>
                    <Link
                        href='https://google.com'>
                        Next.js 13.4 Course
                    </Link>
                </li>
                <li className='body-text !font-normal'>
                    <Link
                        href='https://google.com'>
                        MasterClass
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar