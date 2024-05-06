// スマホ用ハンバーガーメニュー

"use client";

import type { ReactNode} from 'react';
import { useState } from 'react';

import { Menu, X } from 'lucide-react';

type SpMenuProps = {
    menu: ReactNode;
};

export default function SpMenu({menu}: SpMenuProps) {
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleMenuOpen = () => {
        setOpen(!isOpen);
    };

    return(
        <>
        <div className="flex justify-end">
            { isOpen
                ? <X strokeWidth={1.3} stroke="#4b5563" className="w-12 h-12 md:hidden lg:hidden mr-1 mt-1" onClick={handleMenuOpen} />
                : <Menu strokeWidth={1.3} stroke="#4b5563" className="w-12 h-12 md:hidden lg:hidden mr-1 mt-1" onClick={handleMenuOpen} />
            }
        </div>
        <div className={ isOpen
            ? "w-full h-full flex justify-center items-center bg-gradient-to-b from-white via-white to-gray-200 animate-fadeIn"
            : "hidden"
            }>
            {menu}
        </div>
        </>
    );
}