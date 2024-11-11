import { ReactNode } from "react"

interface IBaseProps {
  children: ReactNode
}

const Base = ({ children}:IBaseProps) => {
  return (
    <div className="px-20">{children}</div>
  )
} 

export default Base