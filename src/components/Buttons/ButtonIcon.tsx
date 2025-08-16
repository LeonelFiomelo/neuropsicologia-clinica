import { ReactElement} from "react";

interface Props {
    icon: ReactElement
    disable?: boolean;
    className?: string;
    onClick: () => void;
    title?: string;
}


export default function ButtonIcon({icon, disable, className, onClick, title}: Props) {
    return (
        <button
            title={title}
            disabled={disable} 
            className={`${className}`} 
            onClick={onClick}
        >
            <span>{icon}</span>
        </button>
    )
}