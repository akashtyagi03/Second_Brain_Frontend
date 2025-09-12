import { CrossIcon } from "../icon/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"

interface Modelprops {
    open?: boolean,
    onclosed?: () => void
}

// when someone click outside the model it should close, add Onoutsideclick hook , how to do that figure out!
export const CreateContentModel = (props: Modelprops) => {
    return <div>
        {props.open && <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-4 rounded-md opacity-100">
                    <div className="flex justify-end cursor-pointer" onClick={props.onclosed}>
                        <CrossIcon size="sm" />
                    </div>
                    <div>
                        <Input placeholder={"Title"} />
                        <Input placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center rounded">
                        <Button text="Submit" variant="primary" size="md" />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}

