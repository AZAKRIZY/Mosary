import React from "react"
interface props{
    style:string;
    children?:React.ReactNode;
    useCase?:()=>void
}

const Button = ({style  , children}:props) => {
  return (
    <button className={style}>
        {children}
    </button>
  )
}

export default Button