import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    starticon?: ReactElement;
    endicon?: ReactElement;
    classname?: string;
    onClick?: () => void;
    loading?: boolean;
}

const variantstyle = {
    "primary":"bg-indigo-600 text-white",
    "secondary":"bg-blue-200 text-indigo-700"
}
const sizestyle = {
    "sm":"px-2 py-1 text-sm",
    "md":"px-4 py-2 text-md",
    "lg":"px-6 py-3 text-lg"
}
// when someone hover over the button it should have a slight dark effect by doing border and shadow
const defaultstyle = "font-semibold rounded flex gap-2 cursor-pointer items-center";

export const Button = (props:ButtonProps)=>{
    return <button className={`${variantstyle[props.variant]} ${defaultstyle} ${sizestyle[props.size]} ${props.classname} ${props.loading ? "opacity-50":""} `} onClick={props.onClick} disabled={props.loading}>
        {props.starticon} {props.text} {props.endicon}
    </button>;
}