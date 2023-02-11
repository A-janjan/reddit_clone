import React from "react";
import Image from 'next/image'
import { BeakerIcon, 
    ChevronDownIcon,    
    HomeIcon, 
    MagnifyingGlassIcon 
    } from '@heroicons/react/24/solid'

import { StarIcon, 
    
    BellIcon,
    ChatBubbleOvalLeftIcon,
    GlobeAltIcon,
    PlusIcon,
    SparklesIcon,
    MegaphoneIcon,
    VideoCameraIcon,
    Bars3Icon
 } from '@heroicons/react/24/outline'

import { signIn, signOut, useSession } from 'next-auth/react' 


function Header(){
    
    const {data:session} = useSession();
    
    return(
        <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
            <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
                <Image alt="reddit" src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-reddit-4.png"
                width={50} height={50} />
            </div>
            <div className="mx-7 flex items-center xl:min-w-[300px]">
                <HomeIcon className='h-5 w-5'/>
                <p className="ml-2 flex-1 lg:inline">Home</p>
                <ChevronDownIcon className='h-5 w-5'/>
            </div>
            
            
            {/* search box */}
            <form className="flex flex-1 items-center space-x-2 border border-gray-200 bg-gray-100 rounded-sm">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                <input className="flex-1 bg-transparent outline-none" type="text" placeholder="search reddit" />
                <button type="submit" hidden />
            </form>

            <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
                <SparklesIcon className="icon" />
                <GlobeAltIcon className="icon" />
                <VideoCameraIcon className="icon" />
                <hr className="h-10 border border-gray-100"/>
                <ChatBubbleOvalLeftIcon className="icon"/>
                <BellIcon className="icon" />
                <PlusIcon className="icon" />
                <MegaphoneIcon className="icon" />
            </div>

            <div className="ml-5 flex items-center lg:hidden">
                <Bars3Icon className="icon"/>
            </div>

            {/* Sign in/ Sign Out Button */}
            {session ? (
                <div onClick={() => signOut()} className="hidden cursor-pointer space-x-2 border border-gray-100 lg:flex p-2">
                    <div className="relative h-5 w-5 flex-shrink-0">
                        <Image objectFit="contain" src="https://toppng.com/uploads/preview/reddit-logo-reddit-icon-115628658968pe8utyxjt.png" layout="fill" alt="reddit-icon"/>
                    </div>
                    <div className="flex-1 text-xs">
                        <p className="truncate">{session?.user?.name}</p>
                        <p className="text-gray-400">1 karma</p>
                    </div>
                    <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400"/>
                </div>
            ):(
                <div onClick={() => signIn()} className="hidden cursor-pointer space-x-2 border border-gray-100 lg:flex p-2">
                <div className="relative h-5 w-5 flex-shrink-0">
                    <Image src="https://toppng.com/uploads/preview/reddit-logo-reddit-icon-115628658968pe8utyxjt.png" width={70} height={70} alt="reddit-icon"/>
                </div>
                <p className="text-gray-400">SignIn</p>
            </div>
            )}
            

        </div>
    )
}

export default Header