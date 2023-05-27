import React from 'react'
import styles from './index.module.scss'

interface Props {
    placeholder?: string
    type?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder = '', type = 'text', onChange }: Props) => {
    return (
        <div className={styles.container}>
            <input placeholder={placeholder} type={type} onChange={onChange} />
        </div>
    )
}

export default Input
