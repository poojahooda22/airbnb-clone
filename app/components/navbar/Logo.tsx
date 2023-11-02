'use client'

import Image from 'next/image';

import { useRouter } from 'next/navigation';

const Logo = () => {
    return (
       
        <Image 
            src="/images/logo.png"
            alt="airbnb logo"
            width={100}
            height={100}
            objectFit="contain"
            className="cursor-pointer"
        />
    
    )
}

export default Logo; 