// import { useRef, useState } from "react"
// import axios from "axios"
// import { BACKEND_URL } from "../config"

import { CrossIcon } from "../icon/CrossIcon"

interface Modelprops {
    open?: boolean,
    onclosed?: () => void
    hash?: string
}

// when someone click outside the model it should close, add Onoutsideclick hook , how to do that figure out!
export const Sharelinkmodel = (props: Modelprops) => {


    return <div>
          <div>
            {props.open && (
                <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white p-4 rounded-md opacity-100">
                            <div className="flex justify-between cursor-pointer" onClick={props.onclosed}>
                                <h1 className="text-2xl font-bold">Share Link</h1>
                                <CrossIcon size="sm" />
                            </div>
                            <div className="p-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={props.hash ? `${window.location.origin}/${props.hash}` : "Generating..."}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    </div>
}

