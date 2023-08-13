import React from 'react'
import { LuCopyright } from 'react-icons/lu'

export default function Footer() {
  return (
    <div className="w-full flex justify-center bg-gray-light-50 dark:bg-gray-dark-50">
      <div className="container flex justify-center  p-6">
        <p className="flex justify-center lg:items-center  lg:gap-2 text-sm text-gray-light-600 dark:text-gray-dark-600 text-center">
          <LuCopyright />
          2023 | Designed by Sagar Shah and coded with ❤️️ by Reza Barzakhi
        </p>
      </div>
    </div>
  );
}
