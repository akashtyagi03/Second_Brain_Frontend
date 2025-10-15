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
    Twitter = "twitter"
}

// when someone click outside the model it should close, add Onoutsideclick hook , how to do that figure out!
export const CreateContentModel = (props: Modelprops) => {
    const titleref = useRef<HTMLInputElement>(null)
    const linkref = useRef<HTMLInputElement>(null)
    const [types, setType] = useState(ContentType.Youtube)

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
        }).then((res) => {
            console.log(res.data)
            props.onclosed && props.onclosed()
        })
        props.onclosed && props.onclosed()
    }

    return <div>
        {props.open && <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-4 rounded-md opacity-100">
                    <div className="flex justify-end cursor-pointer" onClick={props.onclosed}>
                        <CrossIcon size="sm" />
                    </div>
                    <div>
                        <Input ref={linkref} placeholder={"Link"} />
                        <Input ref={titleref} placeholder={"Title"} />
                    </div>
                    <div>
                        <div className="flex gap-1 justify-center pb-2">
                            <Button size="sm" text="Youtube" variant={types === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)}}></Button>
                            <Button size="sm" text="Twitter" variant={types === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter)}}></Button>
                        </div>
                    </div>
                    <div className="flex justify-center rounded">
                        <Button onClick={addcontent} text="Submit" variant="primary" size="md" />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}

