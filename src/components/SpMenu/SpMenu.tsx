// スマホ用ハンバーガーメニュー

"use client";

import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import LinkMenu from '../LinkMenu/LinkMenu';

export default function SpMenu() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const hundleMenuOpen = () => {
        setOpen(!isOpen);
    };

    return(
        <>
        <div className="absolute top-1 right-1 ">
        { isOpen
            ? <X size={50} onClick={hundleMenuOpen}/>
            : <Menu size={50} onClick={hundleMenuOpen} />
        }
        </div>
        <div className={ isOpen ? "w-full h-full flex justify-center items-center bg-white" : "invisible" }>
            <LinkMenu />
        </div>
        </>
    );
}