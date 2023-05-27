/* eslint-disable max-len */
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
export const SpinnerIcon = ({
    onClick,
    style,
    width,
    height,
}: IDefaultSvgSettings) => {
    return (

        <svg width={width || "14"} height={height || "14"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"  {...{ onClick, style }}>
            <path d="M6.40221 13.4019L6.40221 12.2565C6.40221 11.9261 6.66999 11.6585 7.00018 11.6585C7.33037 11.6585 7.59816 11.9261 7.59816 12.2565L7.59816 13.4019C7.59816 13.7322 7.33037 14 7.00018 14C6.66999 14 6.40221 13.7322 6.40221 13.4019ZM3.49992 13.0613C3.78606 13.225 4.15044 13.1273 4.31629 12.8424L4.88855 11.8507C4.97465 11.713 5.00117 11.5465 4.96213 11.3889C4.92293 11.2314 4.82148 11.0965 4.681 11.0154C4.54051 10.9342 4.373 10.9135 4.21701 10.9582C4.06102 11.0029 3.92987 11.1092 3.85379 11.2526L3.28152 12.2443C3.11618 12.5302 3.21395 12.896 3.49993 13.0613L3.49992 13.0613ZM2.44744 9.02785C2.34249 9.02785 2.23938 9.05538 2.14845 9.10778L1.15589 9.68013L1.15573 9.68013C0.869752 9.84534 0.771646 10.2111 0.936824 10.4973C1.102 10.7833 1.46774 10.8815 1.7537 10.7163L2.74626 10.1439L2.74643 10.1439C2.98085 10.0087 3.0953 9.73272 3.02523 9.47107C2.95515 9.20957 2.71806 9.02768 2.44745 9.02785L2.44744 9.02785ZM0.597468 7.59341L1.74319 7.59458L1.74436 7.59458C2.07455 7.59491 2.34251 7.32741 2.34285 6.99702C2.34318 6.66677 2.07573 6.39877 1.74539 6.39843L0.599662 6.39726L0.59866 6.39726C0.268304 6.39693 0.000342057 6.66443 -3.41248e-07 6.99465C-0.000333202 7.32506 0.26712 7.59307 0.597464 7.59341L0.597468 7.59341ZM1.16042 4.31153L2.152 4.88508C2.28948 4.97168 2.45632 4.99855 2.61415 4.9595C2.77182 4.92046 2.90696 4.819 2.98822 4.67816C3.06947 4.53748 3.09016 4.36977 3.04511 4.21358C3.00023 4.05739 2.89361 3.92623 2.74996 3.8503L1.75838 3.27675L1.75838 3.27658C1.66762 3.22368 1.56434 3.19582 1.45939 3.19598C1.1891 3.19648 0.952521 3.37804 0.882601 3.6392C0.812693 3.90036 0.926479 4.17601 1.1604 4.31152L1.16042 4.31153ZM3.85948 2.74342L3.85931 2.74342C4.02449 3.02977 4.39057 3.12823 4.67687 2.96302C4.96335 2.79782 5.06162 2.43168 4.89644 2.14533L4.32418 1.15261L4.32435 1.15261C4.15917 0.866096 3.79309 0.767805 3.50678 0.932843C3.22031 1.09805 3.12204 1.46419 3.28721 1.75071L3.85948 2.74342ZM7.00586 2.34159L7.00703 2.34159C7.33672 2.34126 7.60403 2.07443 7.60501 1.74467L7.60735 0.599405L7.60718 0.599238C7.60751 0.44071 7.54495 0.288356 7.43299 0.176051C7.32104 0.063579 7.16904 0.000333189 7.01054 -6.11038e-07L7.0092 -6.11155e-07C6.67951 -6.39977e-07 6.41191 0.267163 6.41123 0.59709L6.40889 1.74236L6.40906 1.74236C6.40872 1.90105 6.47146 2.05324 6.58341 2.16572C6.69536 2.27802 6.84736 2.34143 7.00603 2.3416L7.00586 2.34159ZM9.33486 2.96906C9.62067 3.13443 9.9864 3.03731 10.1524 2.75162L10.727 1.76057C10.8927 1.47472 10.7954 1.10876 10.5098 0.942879C10.224 0.777175 9.85809 0.874459 9.69224 1.16015L9.11762 2.1512L9.11762 2.15136C8.95228 2.43722 9.04938 2.80301 9.33486 2.96906ZM11.8541 4.8993L12.8466 4.32809L12.8466 4.32793C13.1331 4.16339 13.2319 3.79795 13.0673 3.51143C12.9028 3.22508 12.5375 3.12612 12.251 3.29065L11.2584 3.86186L11.2584 3.86202C10.9719 4.02656 10.8732 4.392 11.0377 4.67852C11.2022 4.96504 11.5677 5.06383 11.8541 4.8993ZM12.2558 6.41319C11.9255 6.41286 11.6575 6.68035 11.6573 7.01058C11.657 7.34099 11.9244 7.60899 12.2546 7.60934L13.4003 7.61167L13.4015 7.61151C13.7317 7.61184 13.9997 7.34434 14 7.01412C14.0003 6.68371 13.7329 6.4157 13.4027 6.41536L12.257 6.41302L12.2558 6.41319ZM11.2457 10.1563L12.2362 10.7305C12.3735 10.8166 12.54 10.8433 12.6973 10.8044C12.8547 10.7656 12.9897 10.6644 13.0711 10.5243C13.1525 10.3841 13.1735 10.2167 13.1293 10.0608C13.0851 9.90481 12.9795 9.77331 12.8367 9.69672L11.8462 9.12133C11.7089 9.03973 11.5447 9.01637 11.3901 9.05642C11.2356 9.09663 11.1034 9.19693 11.0232 9.33509C10.9431 9.47327 10.9214 9.6378 10.9633 9.79198C11.0051 9.94617 11.1068 10.0772 11.2457 10.1558L11.2457 10.1563ZM9.66721 12.8505C9.83156 13.137 10.1971 13.2358 10.4836 13.0714C10.7699 12.9069 10.8687 12.5413 10.7043 12.2549L10.1344 11.2613L10.1342 11.2613C9.96985 10.9748 9.6043 10.876 9.318 11.0406C9.03152 11.2051 8.93275 11.5705 9.09709 11.8571L9.66721 12.8505Z" fill="#2B2B2B" />
        </svg>
    )
}
export const EyeIcon = ({
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
            <path d="M8 3C3.65688 3 0.24223 7.50891 0.0999436 7.7C-0.0333145 7.87768 -0.0333145 8.12232 0.0999436 8.3C0.243025 8.49197 3.65757 13 8 13C12.3424 13 15.7578 8.49109 15.9001 8.3C16.0333 8.12232 16.0333 7.87768 15.9001 7.7C15.7576 7.50893 12.3431 3 8 3ZM8 12C4.76449 12 1.96224 8.97543 1.14224 8C1.96167 7.02457 4.76438 4 8 4C11.2356 4 14.0378 7.02457 14.8578 8C14.0381 8.97543 11.2356 12 8 12Z" fill="#808080" />
            <path d="M7.99992 5.49999C7.33695 5.49999 6.70106 5.76338 6.23202 6.2321C5.76327 6.70108 5.4999 7.33702 5.4999 7.99999C5.4999 8.66296 5.7633 9.29885 6.23202 9.76788C6.701 10.2366 7.33695 10.5 7.99992 10.5C8.6629 10.5 9.29879 10.2366 9.76782 9.76788C10.2366 9.2989 10.4999 8.66296 10.4999 7.99999C10.499 7.33725 10.2354 6.70176 9.76691 6.23302C9.29815 5.76449 8.66267 5.5009 7.99992 5.49999ZM7.99992 9.49999C7.60215 9.49999 7.22043 9.34196 6.93923 9.0607C6.65803 8.77945 6.49994 8.39773 6.49994 8.00002C6.49994 7.6023 6.65797 7.22053 6.93923 6.93933C7.22048 6.65813 7.60221 6.50005 7.99992 6.50005C8.39764 6.50005 8.77941 6.65808 9.06062 6.93933C9.34182 7.22059 9.4999 7.6023 9.4999 8.00002C9.4999 8.39773 9.34187 8.7795 9.06062 9.0607C8.77936 9.3419 8.39764 9.49999 7.99992 9.49999Z" fill="#808080" />
        </svg>

    )
}
