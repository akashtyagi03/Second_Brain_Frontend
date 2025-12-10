import { useRef, useState } from "react"
import { CrossIcon } from "../icon/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

interface Modelprops {
    open?: boolean,
    onclosed?: () => void
}

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Reddit = "Reddit",
    document="document",
    image="image",
    video="video"
}

// when someone click outside the model it should close, add Onoutsideclick hook , how to do that figure out!
export const CreateContentModel = (props: Modelprops) => {
    const titleref = useRef<HTMLInputElement>(null)
    const linkref = useRef<HTMLInputElement>(null)
    const [types, setType] = useState<ContentType | "">("");

    async function addcontent() {
        const title = titleref.current?.value
        const link = linkref.current?.value

        console.log(localStorage.getItem("token"))
        await axios.post(`${BACKEND_URL}/content`, {
            title,
            link,
            types
        }, {
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            }
        }).then(() => {
            props.onclosed && props.onclosed()
        })
        props.onclosed && props.onclosed()
    }

    return <div>
        {props.open && <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white h-100 w-100 p-5 rounded-md opacity-100">
                    <div className="flex justify-between items-center" onClick={props.onclosed}>
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
                            Add Content
                        </h1>
                        <CrossIcon size="sm" />
                    </div>
                    <div className="p-5 flex flex-col justify-center items-center">
                        <h1 className="font-bold">Title</h1>
                        <Input ref={titleref} placeholder={"Enter your title"} />
                        <h1 className="font-bold">Link</h1>
                        <Input ref={linkref} placeholder={"Enter your url"} />
                    </div>
                    <div>
                        <div className="flex justify-center pb-5">
                            <select
                                value={types}
                                onChange={(e) => setType(e.target.value as ContentType)}
                                className="px-10 py-2 text-lg font-medium text-white bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="" disabled hidden>
                                    Select Platform...
                                </option>
                                <option value={ContentType.Youtube}>YouTube</option>
                                <option value={ContentType.Twitter}>Twitter</option>
                                <option value={ContentType.document}>Document</option>
                                <option value={ContentType.image}>Image</option>
                                <option value={ContentType.video}>Video</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center rounded text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
                        <Button onClick={addcontent} text="Submit" variant="primary" size="md" />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}

