import React from 'react'
import styles from './index.module.scss'

interface Props {
    onClick: (e: React.MouseEvent) => void
    text: string
}

const Button = ({ onClick, text }: Props) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
