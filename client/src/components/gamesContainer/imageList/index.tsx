import React from 'react'
import { IGame } from '../../../interfaces/redux/data'
import cx from 'classnames'
import styles from './index.module.scss'

interface IImageList {
    games: IGame[]
    showNumberOfColumns: number
}

const ImageList = ({ games, showNumberOfColumns }: IImageList) => {
    return (
        <div className={styles.container}>
            {games &&
                games.map(game => {
                    return (
                        <div
                            key={game.id}
                            className={cx(
                                styles.image,
                                styles[`column-${showNumberOfColumns}`],
                            )}
                        >
                            <img src={game.coverLarge} alt={game.name} />
                        </div>
                    )
                })}
        </div>
    )
}

export default ImageList
