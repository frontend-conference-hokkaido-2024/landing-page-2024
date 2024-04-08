// スマホ用ハンバーガーメニュー

"use client";

import type { ReactNode} from 'react';
import { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
        <div className="absolute top-1 right-1 ">
        { isOpen
            ? <XMarkIcon className="w-12 h-12" onClick={handleMenuOpen} />
            : <Bars3Icon className="w-12 h-12" onClick={handleMenuOpen} />
        }
        </div>
        <div className={ isOpen ? "w-full h-full flex justify-center items-center bg-white" : "hidden" }>
            {menu}
        </div>
        </>
    );
}