import { ReactNode } from "react";

//Interface
interface Props {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={`xl:container xl:mx-auto px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Container;