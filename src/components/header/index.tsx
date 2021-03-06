import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useWallet } from "hooks";

import Logo from "assets/images/logo.png";
import WFCIcon from "assets/images/wfc_white.png";

export const Header = () => {
  const [visible, setVisible] = useState(false);

  const { wallet, setWallet } = useWallet();
  console.log({ wallet });

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <nav className='px-4 lg:h-20 m-auto absolute top-0 left-0 w-full'>
        <div className='container flex items-stretch justify-center flex-wrap relative h-full m-auto'>
          <Link href='/staking'>
            <a className='flex items-center p-2 absolute left-0 top-2/4 transform -translate-y-1/2'>
              <Image
                src={Logo}
                alt='World Family Coin'
                width={50}
                height={50}
              />
            </a>
          </Link>
          <button
            className='inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              visible ? "" : "hidden"
            } lg:inline-flex lg:flex-grow lg:w-auto justify-center`}
          >
            <div className='flex items-center'>
              <Image
                src={WFCIcon}
                alt='World Family Coin'
                width={50}
                height={50}
              />
              <h2 className='text-white text-4xl'>ORLD FAMILY COIN</h2>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
