import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretUp} from "@fortawesome/free-solid-svg-icons"

export function BtnScroll() {
    const topClick = () => {
        const body = document.querySelector('body').getBoundingClientRect().top + window.scrollY
        window.scroll({
            top: body,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className='fixed bottom-8 right-4 bg-black text-white rounded-full w-[50px] h-[50px] md:w-[50px] md:h-[50px] md:right-8 md:bottom-8'
            onClick={topClick}
        >
            <FontAwesomeIcon icon={faCaretUp}/>
        </button>
    )
}
