"use client"
import { ReactNode, useRef } from "react";

//Interface
interface Props {
    children: ReactNode;
    open: boolean;
}
interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    open: boolean;
}
interface ContainerProps {
    children: ReactNode;
}

export const CollapseContainer = ({ children }: ContainerProps) => {
    return (
        <div className="bg-neutral-200 my-2 rounded-md overflow-hidden">
            {children}
        </div>
    );
};

export const CollapseButton = ({ onClick, children, open }: ButtonProps) => {
    return (
        <button onClick={onClick} className="w-full text-left font-semibold text-base py-2 px-4 flex items-center">
            <span className="flex-1">{children}</span>
            <div className={`transition-all overflow-hidden duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${open ? "rotate-180 text-secondary" : "rotate-0"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 184l144 144l144-144" /></svg>
            </div>
        </button>
    );
};

export const Collapse = ({ children, open }: Props) => {
    //Hook Initializing
    const contentRef = useRef<HTMLDivElement | null>(null);

    //Handler
    const getHeight = () => {
        const height = contentRef.current?.scrollHeight + "px";
        return height
    }
    return (
        <p className={`transition-[height] overflow-hidden duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)]`} style={{ height: open ? getHeight() : 0 }} ref={contentRef}>
            <span className="py-5 px-4 block border-t border-solid border-gray-300">
                {children}
            </span>
        </p>
    );
};