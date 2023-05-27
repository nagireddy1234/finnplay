import React from 'react'
import { IGame } from "../../../interfaces/redux/data"
import styles from './index.module.scss'

interface IImageList {
  games: IGame[]
}

const ImageList = ({ games }: IImageList) => {
console.log(games,'gamesfames')
  return (
    <div className={styles.container}>
      {games && games.map(game => {
        return <div key={game.id} className={styles.image}>
          <img src={game.coverLarge} alt={game.name} />
        </div>
      })}
    </div>
  )
}

export default ImageList