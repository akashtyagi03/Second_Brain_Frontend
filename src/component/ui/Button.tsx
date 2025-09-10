interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    starticon?: any;
    endicon?: any;
    onClick?: () => void;
}

export const Button = (props:ButtonProps)=>{
    return <button>Button</button>;
}