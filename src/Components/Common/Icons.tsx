"use client"

import { Icon } from "@iconify/react";

//Interface
interface Props {
    icon: string;
    className?: string;
}
const Icons = ({ icon, className }: Props) => {
    return (
        <Icon icon={icon} className={className} />
    );
};

export default Icons;