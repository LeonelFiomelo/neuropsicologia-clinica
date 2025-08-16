interface Props {
    size?: number;
    color?: string;
}

export default function Close({size = 24, color = "stroke-white"}: Props) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <rect width="24" height="24"></rect> 
                <path d="M7 17L16.8995 7.10051" className={color} strokeLinecap="round" strokeLinejoin="round"></path> 
                <path d="M7 7.00001L16.8995 16.8995" className={color} strokeLinecap="round" strokeLinejoin="round"></path> 
            </g>
        </svg>
    )
}