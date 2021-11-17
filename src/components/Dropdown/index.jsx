import { useState } from "react"
import Back from '../../public/assets/arrow-back.svg'
import Ahead from '../../public/assets/arrow-ahead.svg'
import '../Dropdown/index.css'

export const Dropdown = ({title, children}) => {
    const [showMore, setShowMore] = useState(false);

    const handleMoreClick = () => {
        setShowMore(!showMore)
    }


    return (
    <>
        <button className="dropdown_button" onClick={handleMoreClick}>
            {title}
            {showMore ? <img className="dropdown_button_arrow" src={Ahead} alt="Ahead" /> 
            : <img className="dropdown_button_arrow" src={Back} alt="Back" />}
        </button>
        {showMore && (<div className="dropdown_content">{children}</div>)}
    </>
    )
}