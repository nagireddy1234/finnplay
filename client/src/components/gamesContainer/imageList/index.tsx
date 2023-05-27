import React from 'react'
import { useSelector } from "react-redux"
import { selectGamesList } from "../../../redux/login/selector"

type Props = {}

const ImageList = (props: Props) => {

  const data = useSelector(selectGamesList)
  console.log(data,"dddd")
  return (
    <div>
        
    </div>
  )
}

export default ImageList