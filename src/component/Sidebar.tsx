import { TwitterIcon } from "../icon/TwitterIcon";
import { Sidebaritem } from "./Sidebaritem";
import { YoutubeIcon } from "../icon/YoutubeIcon";
import { DocumentIcon } from "../icon/DocumwntIcon";
import { LinkIcon } from "../icon/LinkIcon";
import { TagIcon } from "../icon/TagIcon";
import { BrainIcon } from "../icon/BrainIcon";

export function Sidebar() {
    return <div className="h-screen bg-white w-70 fixed  left-0 top-0">
        <div className="flex text-2xl pt-4 pl-5 items-center gap-2">
            <div className="text-indigo-600">
                <BrainIcon size="md"/>
            </div>
            Second_Brain
        </div>
        <div className="p-10 cursor-pointer">
            <Sidebaritem text={"twitter"} icon={<TwitterIcon />} />
            <Sidebaritem text={"youtube"} icon={<YoutubeIcon />} />
            <Sidebaritem text={"Document"} icon={<DocumentIcon />} />
            <Sidebaritem text={"Links"} icon={<LinkIcon />} />
            <Sidebaritem text={"Tags"} icon={<TagIcon />} />
        </div>
    </div>
}