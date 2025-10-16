import type { ReactElement } from "react";

interface Itemprops{
    text:string;
    icon?:ReactElement;
    src?:string
    onClick?:()=>void;
    isOpen: boolean;
}

export const Sidebaritem=(props: Itemprops)=>{
    return <div className={`
        flex items-center p-3 my-2 rounded-lg hover:bg-gray-100 transition-colors
        ${!props.isOpen ? 'justify-center' : ''} 
    `}>
        {props.icon}
        {/* This is the key: only render the span if isOpen is true */}
        {props.isOpen && <span className="ml-4 font-medium">{props.text}</span>}
    </div>
}