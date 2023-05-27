import React from 'react'
import styles from './index.module.scss'
import { IGroup, IProvider, ISortingData } from "../../../../interfaces/redux/data"
import Button from "../../../common/button"

interface IButtonList {
    data: IProvider[] | IGroup[] | ISortingData[]
    label: string
}

const ButtonList = ({ data, label }: IButtonList) => {
    return (

        <div className={styles.container}>
            <p>{label}</p>
            <div className={styles.buttonContainer}>
                {data && data.map(item => {
                    return <button key={item.id}>{item.name}</button>
                })}
            </div>
        </div>
    )
}

export default ButtonList