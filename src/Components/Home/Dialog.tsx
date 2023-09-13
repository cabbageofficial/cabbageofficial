"use client"
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Dialog = () => {
    //State
    const [open, setOpen] = useState<boolean>(false);
    const [mount, setMount] = useState<boolean>(false);
    const [stop, setStop] = useState<boolean>(false);

    //Handler onClose
    const onClose = () => {
        setOpen(false);
    };

    const onOpen = () => {
        setOpen(true)
        setStop(true)
    }

    //Lifecycle Hook
    useEffect(() => {
        setMount(true)
    }, []);

    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setStop(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [open]);

    return (
        <div>
            <button onClick={onOpen}>
                <Icon className="text-3xl" icon="solar:play-bold" />
            </button>
            <div className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black rounded-md transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] w-[672px] h-[378px] ${open ? "visible opacity-100 -translate-y-1/2" : "invisible opacity-0 -translate-y-[45%]"}`}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                    <div className="w-8 h-8 border-b-2 border-white rounded-full animate-spin"></div>
                </div>
                {stop &&
                    <iframe width="100%" height="100%" className="rounded-md" src="https://www.youtube.com/embed/FqFDfbvm-0o?si=BWkgHFrvIS3XRfeT&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                }
            </div>
            <div className={`fixed left-0 right-0 bottom-0 top-0 bg-main bg-opacity-30 select-none transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${open ? "visible opacity-100" : "invisible opacity-0"}`} onClick={onClose} />
        </div>
    );
};

export default Dialog;