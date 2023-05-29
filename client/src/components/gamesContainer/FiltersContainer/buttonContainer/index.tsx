import React from 'react'
import styles from './index.module.scss'
import {
    IGroup,
    IProvider,
    ISortingData,
} from '../../../../interfaces/redux/data'

interface IButtonList {
    data: IProvider[] | IGroup[] | ISortingData[]
    label: string
    nameList?: string[]
    onClick: (v: IProvider | IGroup | ISortingData) => void
}

const ButtonList = ({ data, label, onClick, nameList = [] }: IButtonList) => {
    return (
        <div className={styles.container}>
            <p>{label}</p>
            <div className={styles.buttonContainer}>
                {data &&
                    data.map(item => {
                        return (
                            <button
                                key={item.id}
                                style={{
                                    backgroundColor: nameList.includes(
                                        item.name,
                                    )
                                        ? 'blue'
                                        : 'white',
                                }}
                                onClick={() => onClick(item)}
                            >
                                {item.name}
                            </button>
                        )
                    })}
            </div>
        </div>
    )
}

export default ButtonList
