import { useState } from "react"
import ArrowIcon from "./ArrowIcon"

export default function Toggler({ children, text }) {

  const [toggler, setToggler] = useState(false)

  const hadleToggleViewAllNotes = () => {
    setToggler(!toggler)
  }

  return (
    <div>
      <div
        className="Toggler"
        onClick={hadleToggleViewAllNotes}
      >
        <ArrowIcon rotate={toggler} /><span>{text}</span>
      </div>
      <ul className={`Toggled ${toggler ? 'View' : ''}`}>
        {children}
      </ul>
    </div>
  )
}
