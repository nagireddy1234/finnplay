import React from 'react'
import styles from './index.module.scss'
import { useSelector } from "react-redux"
import { selectLoginReducer } from "../../../redux/login/selector"
import { SpinnerIcon } from "../../../assets/icons"

interface Props {
    onClick: (e: React.MouseEvent) => void
    text: string
}

const Button = ({ onClick, text}: Props) => {
    const { isLoading } = useSelector(selectLoginReducer)

    return (
        <button className={styles.button} onClick={onClick}>
            {!isLoading ? text : <SpinnerIcon />}
        </button>
    )
}

export default Button
