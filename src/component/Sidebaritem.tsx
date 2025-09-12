import type { ReactElement } from "react";

interface Itemprops{
    text:string;
    icon?:ReactElement;
    onClick?:()=>void;
}

export const Sidebaritem=(props: Itemprops)=>{
    return <div className="flex p-1">
        <div className="gap-4 p-1 px-2 flex text-gray-800 items-center rounded-sm hover:bg-gray-100">
            {props.icon} {props.text}
        </div>
    </div>
}