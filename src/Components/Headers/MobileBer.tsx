"use client"
import { useState, Fragment } from "react";
import Icons from "../Common/Icons";

//Components
import Drawer from "./Drawer";

const MobileBer = () => {
    //State
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
            />
            <div className="lg:hidden xxs:block select-none cursor-pointer" onClick={() => setOpen(true)}>
                <Icons className="text-3xl block" icon="uis:bars" />
            </div>
        </Fragment>
    );
};

export default MobileBer;