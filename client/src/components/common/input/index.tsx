import React from 'react'
import styles from './index.module.scss'
import { EyeIcon } from "../../../assets/icons"

interface Props {
    placeholder?: string
    value: string
    type?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder = '', type = 'text', onChange, value = '' }: Props) => {
    const togglePassword = () => {
        if (type === 'password') {
            type = 'text'
        } else {
            type = 'password'
        }
        console.log(type,"typetype")
    }
    return (
        <div className={styles.container}>
            {value && <p>{placeholder}</p>}
            <div className={styles.inputContainer}>
                <input placeholder={placeholder} type={type} onChange={onChange} value={value} />
                {placeholder === 'Password' && <EyeIcon style={{ cursor: 'pointer' }} onClick={togglePassword} />}
            </div>
        </div>
    )
}

export default Input
