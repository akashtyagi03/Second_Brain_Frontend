import { CrossIcon } from "../icon/CrossIcon"
import { Button } from "./Button"

interface Modelprops {
    open?: boolean,
    onclosed?: () => void
}

interface InputProps {
    onchange?: () => void,
    placeholder: string,
}

// when someone click outside the model it should close, add Onoutsideclick hook , how to do that figure out!
export const CreateContentModel = (props: Modelprops) => {
    return <div>
        {props.open && <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-4 rounded-md opacity-100">
                    <div className="flex justify-end cursor-pointer" onClick={props.onclosed}>
                        <CrossIcon size="sm"/>
                    </div>
                    <div>
                        <Input placeholder={"Title"} />
                        <Input placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center rounded">
                        <Button text="Submit" variant="primary" size="md"/>
                    </div>
                </span>
            </div>
            </div> }
    </div>
}

function Input(props:InputProps){
    return <div>
        <input placeholder={props.placeholder} type={"text"} className="px-4 py-2 m-2 rounded border" onChange={props.onchange}/>
    </div>
}

// export const CreateContentModel = (props: Modelprops) => {
//     const modalRef = useRef<HTMLDivElement>(null);

//     // Use the custom hook to close the modal when clicking outside
//     useOnClickOutside(modalRef, () => {
//         if(props.onclosed) {
//             props.onclosed();
//         }
//     });

//     if (!props.open) {
//         return null; // Return nothing if the modal is not open
//     }

//     return (
//         // Main container, fixed to cover the screen and center content
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             {/* The Modal Content */}
//             <div ref={modalRef} className="bg-white p-4 rounded-md shadow-lg w-full max-w-md">
//                 <div className="flex justify-end cursor-pointer" onClick={props.onclosed}>
//                     <CrossIcon size="sm"/>
//                 </div>
//                 <div>
//                     <Input placeholder={"Title"} />
//                     <Input placeholder={"Link"} />
//                 </div>
//                 <div className="flex justify-center mt-4">
//                     <Button text="Submit" variant="primary" size="md"/>
//                 </div>
//             </div>
//         </div>
//     );
// };


// function Input(props:InputProps){
//     return <div>
//         <input placeholder={props.placeholder} type={"text"} className="w-full px-4 py-2 m-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={props.onchange}/>
//     </div>
// }