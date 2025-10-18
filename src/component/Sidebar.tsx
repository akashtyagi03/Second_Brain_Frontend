import { TwitterIcon } from "../icon/TwitterIcon";
import { Sidebaritem } from "./Sidebaritem";
import { YoutubeIcon } from "../icon/YoutubeIcon";
import { DocumentIcon } from "../icon/DocumwntIcon";
import { BrainIcon } from "../icon/BrainIcon";
import { SidebarIcon } from "../icon/SidebarIcon";
import { ImageIcon } from "../icon/ImageIcon";
import { VideoIcon } from "../icon/VideoIcon";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}
export function Sidebar(props: SidebarProps) {
    return <div className={`
        h-screen bg-white shadow-md
        transition-all duration-300 ease-in-out
        flex flex-col  /* Use for better internal alignment */
        ${props.isOpen ? 'w-75' : 'w-20'}
    `}>
        {/* The toggle button is now functional */}
        <div onClick={props.toggleSidebar} className="flex justify-end pr-3 pl-10 pt-2 cursor-pointer">
            <SidebarIcon />
        </div>

        {props.isOpen && (
    <div className="flex items-center gap-2 pl-5">
        <div className="text-indigo-600">
            <BrainIcon size="sm" />
        </div>
        <span className="font-bold text-indigo-600 text-2xl whitespace-nowrap">
            Second Brain
        </span>
    </div>
)}

        <div className="p-10 cursor-pointer">
            <Sidebaritem isOpen={props.isOpen} text={"Twitter"} icon={<TwitterIcon />} />
            <Sidebaritem isOpen={props.isOpen} text={"Youtube"} icon={<YoutubeIcon />} />
            <Sidebaritem isOpen={props.isOpen} text={"Document"} icon={<DocumentIcon />} />
            <Sidebaritem isOpen={props.isOpen} text={"Image"} icon={<ImageIcon />} />
            <Sidebaritem isOpen={props.isOpen} text={"Video"} icon={<VideoIcon />} />
        </div>
    </div>
}