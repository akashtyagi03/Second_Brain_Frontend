import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    starticon?: ReactElement;
    endicon?: ReactElement;
    onClick?: () => void;
}

const variantstyle = {
    "primary":"bg-blue-500 text-white",
    "secondary":"bg-gray-500 text-white"
}
const sizestyle = {
    "sm":"px-2 py-1 text-sm",
    "md":"px-4 py-2 text-md",
    "lg":"px-6 py-3 text-lg"
}
const defaultstyle = "font-semibold rounded flex gap-2";

export const Button = (props:ButtonProps)=>{
    return <button className={`${variantstyle[props.variant]} ${defaultstyle} ${sizestyle[props.size]}`}>
        {props.starticon} {props.text} {props.endicon}
    </button>;
}