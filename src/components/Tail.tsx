import React, { useState } from "react";

export default function Tail() {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setToggle((cur: boolean) => !cur);
  };
  return (
    <nav className=" w-auto pl-10 pr-10 bg-slate-100">
      <div className=" flex justify-between py-5">
        <ul className=" flex gap-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-2 text-blue-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>

          <li className=" py-2 flex font-extrabold cursor-pointer">HWAN</li>
          <li className=" hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu1
          </li>
          <li className=" hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu2
          </li>
          <li className=" hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu3
          </li>
        </ul>
        <a
          href="#"
          className=" hidden md:block py-2 px-3 text-white font-bold bg-orange-500 hover:bg-slate-600 rounded transition duration-300"
        >
          Login
        </a>

        {/* 모바일 메뉴 파트 */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 토글 파트 */}
      <div className={toggle ? "md:hidden py-3" : "hidden py-3"}>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu1
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu2
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu3
        </a>
      </div>
    </nav>
  );
}
