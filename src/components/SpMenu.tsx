// スマホ用ハンバーガーメニュー

"use client";

import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import { LinkButton } from './LinkButon';

import type { MenuButtonProps } from 'menu';


import { MENU_CONTENTS } from '@/const/menuContents';

export default function SpMenu() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleMenuOpen = () => {
        setOpen(!isOpen);
    };

    return(
        <>
        <div className="flex justify-end">
            { isOpen
                ? <X strokeWidth={1.3} stroke="#4b5563" className="fixed w-10 h-10 z-10 md:hidden lg:hidden mr-3 mt-3" onClick={handleMenuOpen} />
                : <Menu strokeWidth={1.3} stroke="#4b5563" className="absolute w-10 h-10 z-10 md:hidden lg:hidden mr-3 mt-3" onClick={handleMenuOpen} />
            }
        </div>
        <div className={ isOpen
            ? "fixed w-full h-full flex justify-center items-center bg-gradient-to-b from-white via-white to-gray-200 animate-fadeIn"
            : "hidden"
            }>
            <div className="bg-transparent flex flex-col gap-2 w-32">
                {
                    MENU_CONTENTS.map((content: MenuButtonProps, index: number) => <LinkButton key={index} href={content.href}>{content.title}</LinkButton> )
                }
            </div>
        </div>
        </>
    );
}