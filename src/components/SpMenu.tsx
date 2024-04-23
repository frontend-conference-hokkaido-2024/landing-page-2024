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
        <div className="absolute top-1 right-1 z-10">
        { isOpen
            ? <X className="w-12 h-12 md:hidden lg:hidden" onClick={handleMenuOpen} />
            : <Menu className="w-12 h-12 md:hidden lg:hidden" onClick={handleMenuOpen} />
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