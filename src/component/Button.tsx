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
    "primary":"bg-blue-200 text-indigo-700",
    "secondary":"bg-indigo-600 text-white"
}
const sizestyle = {
    "sm":"px-2 py-1 text-sm",
    "md":"px-4 py-2 text-md",
    "lg":"px-6 py-3 text-lg"
}
const defaultstyle = "h-11 font-semibold rounded flex gap-2 cursor-pointer items-center font-light";

export const Button = (props:ButtonProps)=>{
    return <button className={`${variantstyle[props.variant]} ${defaultstyle} ${sizestyle[props.size]}`}>
        {props.starticon} {props.text} {props.endicon}
    </button>;
}