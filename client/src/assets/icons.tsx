import React from 'react'

interface IDefaultSvgSettings {
    onClick?: (eve?: React.MouseEvent<SVGSVGElement> | undefined) => void
    style?: React.CSSProperties
    height?: number
    width?: number
    color?: string
}

export const DropdownIcon = ({
    onClick,
    style,
    width,
    height,
}: IDefaultSvgSettings) => {
    return (
        <svg
            width={width || '24'}
            height={height || '24'}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...{ onClick, style }}
        >
            <g clipPath="url(#clip0_2_155)">
                <path d="M15.88 9.29L12 13.17L8.11998 9.29C7.72998 8.9 7.09998 8.9 6.70998 9.29C6.31998 9.68 6.31998 10.31 6.70998 10.7L11.3 15.29C11.69 15.68 12.32 15.68 12.71 15.29L17.3 10.7C17.69 
                10.31 17.69 9.68 17.3 9.29C16.91 8.91 16.27 8.9 15.88 9.29Z" fill="#273348" />
            </g>
            <defs>
                <clipPath id="clip0_2_155">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
export const UserIcon = ({
    onClick,
    style,
    width,
    height,
}: IDefaultSvgSettings) => {
    return (
        <svg width={width || "16"}
            height={height || "16"}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...{ onClick, style }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.2255 5.68697C11.2255 7.46957 9.78246 8.91247 8 8.91247C6.21755 8.91247 4.7745 7.46957 
            4.7745 5.68697C4.7745 3.90436 6.21755 2.46146 8 2.46146C9.78261 2.46146 11.2255 3.90451 11.2255 5.68697ZM9.95226 5.687C9.95226
             4.60481 9.08219 3.73475 8 3.73475C6.91781 3.73475 6.04775 4.626 6.04775 5.687C6.04775 6.76919 6.91781 7.63926 8 7.63926C9.08219 7.63926 9.95226 6.76919 9.95226 5.687Z" fill="#EC4466" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4138 12.4138 16 8 16C3.58624 
            16 0 12.4138 0 8C0 3.58624 3.58624 0 8 0C12.4138 0 16 3.58624 16 8ZM8 10.8222C6.36601 10.8222 4.79583 11.6074 3.58621
             13.0504C4.75332 14.0901 6.30239 14.7267 8 14.7267C9.69761 14.7267 11.2466 14.0901 12.4138 13.0504C11.2042 11.6074 9.63399 10.8222 8 10.8222ZM14.7268 8C14.7268 4.28647 
             11.7135 1.27321 8 1.27321C4.28647 1.27321 1.27321 4.28647 1.27321 8C1.27321 9.549 1.80371 10.9709 2.69496 
             12.1167C4.15915 10.4614 6.00527 9.549 8 9.549C9.99473 9.549 11.8408 10.4615 13.305 12.1167C14.1963 10.9921 14.7268 9.54903 14.7268 8Z" fill="#EC4466" />
        </svg>

    )
}
