import axios from "axios";
import { DeleteIcon } from "../icon/DeleteIcon";
import { BACKEND_URL } from "../config";
import { ExternallinkIcon } from "../icon/ExternallinkIcon";

interface CardProps {
    title?: string;
    link?: string;
    types?: "twitter" | "youtube" | "reddit";
    _id?: string;
}

const defaultstyle = "p-4 rounded-2xl shadow-lg bg-white max-w-md max-h-[350px]";

export const Card = (props: CardProps) => {
    function deletecontent() {
        return async () => {
            try {
                // Assuming the backend API endpoint for deleting content is /api/content
                const response = await axios.delete(`${BACKEND_URL}/content`, {
                    headers: {
                        "Authorization": `${localStorage.getItem("token")}`
                    },
                    data: { contentId: props._id } // Send the link or ID of the content to be deleted
                });                
                if (response) {
                    console.log('Content deleted successfully');
                    // Optionally, you can add logic to refresh the content list or update the UI
                } else {
                    console.error('Failed to delete content');
                }
            } catch (error) {
                console.error('Error deleting content:', error);
            }
        };
    }
    return <div className={`${defaultstyle}`}>
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <a
                    href={props.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        if (!props.link) e.preventDefault();
                    }}
                >
                    <ExternallinkIcon />
                </a>
                {props.title}
            </div>
            <div className="flex gap-2 items-center">
                <button className="cursor-pointer" onClick={deletecontent()}><DeleteIcon size="sm" /></button>
            </div>
        </div>
        {/* // here we are going to embed content of the*/}
        <div className="pt-4 rounded-2xl">
            {props.types === "youtube" && props.link && (
                <iframe
                    className="w-full aspect-video rounded"
                    src={props.link
                        .replace("watch?v=", "embed/")
                        .replace("youtu.be/", "youtube.com/embed/")}
                    title={props.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
            {props.types === "twitter" && props.link && (
                <div className="overflow-y-auto max-h-[280px]">
                    <blockquote className="twitter-tweet">
                        <a href={props.link.replace("x.com", "twitter.com")}>Loading X's post...</a>
                    </blockquote>
                </div>
            )}
        </div>
    </div>;
}