import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, } from 'react-icons/rx';
import { MdDashboard } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-black text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdDashboard  size={20} />
            </div>
          </Link>
          <Link href='/users'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <IoPersonSharp  size={20} />
            </div>
          </Link>
          <Link href='/activity'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaBusinessTime size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
