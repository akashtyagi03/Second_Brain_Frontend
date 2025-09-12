
interface InputProps {
    onchange?: () => void,
    placeholder: string,
    ref?:any
}

export function Input(props:InputProps){
    return <div>
        <input ref={props.ref} placeholder={props.placeholder} type={"text"} className="px-4 py-2 m-2 rounded border" onChange={props.onchange}/>
    </div>
}
