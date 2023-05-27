import React, { ReactSVGElement } from 'react'
import styles from './index.module.scss'

interface Props {
    placeholder?: string
    value: string
    type?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    icon?: any| ReactSVGElement | null |undefined
}

const Input = ({ placeholder = '', type = 'text', onChange, value = '', icon = null }: Props) => {
    return (
        <div className={styles.container}>
            {value && <p>{placeholder}</p>}
            <div className={styles.inputContainer}>
                <input placeholder={placeholder} type={type} onChange={onChange} value={value} />
                {icon && icon}
            </div>
        </div>
    )
}

export default Input
