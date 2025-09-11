import { DeleteIcon } from "../icon/DeleteIcon";
import { ShareIcon } from "../icon/ShareIcon";

interface CardProps {
    title: string;
    link?: string;
    type?: "twitter" | "youtube";
}

const defaultstyle = "p-4 rounded shadow-lg bg-white max-w-md max-h-60";

export const Card = (props: CardProps) => {
    return <div className={`${defaultstyle}`}>
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <ShareIcon size={"sm"} />
                {props.title}
            </div>
            <div className="flex gap-2 items-center">
                <ShareIcon size={"sm"} />
                <DeleteIcon size={"sm"} />
            </div>
        </div>
        {/* // here we are going to embed content of the*/}
        <div className="pt-3">
            {props.type === "youtube" && <iframe src="https://www.youtube.com/embed/fEewMS_Ocqo?si=HGUFLTMKS3n0061C" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {props.type === "twitter" && <blockquote className="twitter-tweet">
                <a href={props.link}></a></blockquote>}
        </div>
    </div>;
}