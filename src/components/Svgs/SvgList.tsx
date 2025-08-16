interface Props {
    size?: number;
    fill?: string;
}

export default function SvgList({size = 24, fill = "fill-black"}: Props) {
    return (
        <svg 
            width={size}
            height={size}
            viewBox="0 0 16 16" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M3 1H1V3H3V1Z" className={fill}></path> 
                <path d="M3 5H1V7H3V5Z" className={fill}></path> 
                <path d="M1 9H3V11H1V9Z" className={fill}></path> 
                <path d="M3 13H1V15H3V13Z" className={fill}></path> 
                <path d="M15 1H5V3H15V1Z" className={fill}></path> 
                <path d="M15 5H5V7H15V5Z" className={fill}></path> 
                <path d="M5 9H15V11H5V9Z" className={fill}></path> 
                <path d="M15 13H5V15H15V13Z" className={fill}></path> 
            </g>
        </svg>
    )
}