import { DeleteIcon } from "../icon/DeleteIcon";
import { ShareIcon } from "../icon/ShareIcon";

interface CardProps {
    title?: string;
    link?: string;
    types?: "twitter" | "youtube";
}

const defaultstyle = "p-4 rounded shadow-lg bg-white max-w-md max-h";

export const Card = (props: CardProps) => {
    return <div className={`${defaultstyle}`}>
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <a
                    href={props.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        if (!props.link) e.preventDefault(); // prevent broken link click
                    }}
                >
                    <ShareIcon size="sm" />
                </a>
                {props.title}
            </div>
            <div className="flex gap-2 items-center">
                <ShareIcon size={"sm"} />
                <DeleteIcon size={"sm"} />
            </div>
        </div>
        {/* // here we are going to embed content of the*/}
        <div className="pt-4">
            {props.types === "youtube" && <iframe className="w-full" src={props.link?.replace("watch", "embed").replace("?v=", "/")} title={props.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

            {props.types === "twitter" && <blockquote className="twitter-tweet">
                <a href={props.link?.replace("x.com", "twitter.com")}></a>
            </blockquote>}
        </div>
    </div>;
}