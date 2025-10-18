interface brainprops{
    size: "sm" | "md" | "lg"
}
//@ts-ignore
const sizestyle = {
    "sm": "size-5",
    "md": "size-12",
    "lg": "size-20"
}

export const BrainIcon = (props: brainprops) => (
    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
        <svg className={`${sizestyle[props.size]} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
);