import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [hasMounted, setHasMounted] = useState(false);

  const { data: session, status } = useSession()
  const loading = status === "loading"

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  console.log(session, 'session')
    return (
      <header className="sticky top-0 z-50 bg-white laptop:z-50 w-full max-w-8xl mx-auto flex-none flex h-16 laptop:h-20 shadow-lg justify-center">
          {/* <div className="flex-none flex p-2 items-center border-b border-gray-200 lg:border-b-0 lg:hidden ">
              <MenuIcon className="w-10 lg:hidden hover:bg-gray-300 hover:rounded-lg focus:bg-gray-300 focus:rounded-lg"/>
          </div> */}
          <div className="w-[1280px] flex justify-between">
            <div className="w-[150px] m-5">
                <span className="font-bold text-xl w-auto "><Link href="/">집중</Link></span>
            </div>
            <div className="flex justify-between items-center">
  
              <nav className="hidden tablet:block">
                <ul className="inline-flex">
                    <li className='m-10 w-15 list-none'><Link href="/map">매물</Link></li>
                    <li className='m-10 w-15 list-none'><Link href="/post">매물등록</Link></li>
                  {/*<li className='m-10 w-15 list-none'>커뮤니티</li>*/}
                  {/*<li className='m-10 w-15 list-none'>이벤트</li>*/}
                    <li className='m-10 w-15 list-none'>
                      {
                        !session && (
                        loading ? <a>로딩중</a> : <a onClick={()=>{signIn()}}>로그인</a>
                        )
                      }
                      {
                        session?.user && (
                          <>
                            <a onClick={()=>{signOut()}}>로그아웃</a>
                          </>
                        )
                      }
                    </li>
                </ul>
              </nav>
            </div>
          </div>
          
          
      </header>
    )
  }
  