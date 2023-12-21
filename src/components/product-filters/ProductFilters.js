import React, {useState} from "react"
import {Category} from "./Category"

export function ProductFilters() {
    const [toggleFilters, setToggleFilters] = useState(false)

    const toggleFiltersBtn = () => {
        setToggleFilters(prev => !prev)
    }

    return (
        <>
            <button className='block border px-4 border-black font-medium py-1 mb-2 xl:hidden' onClick={toggleFiltersBtn}>Filters</button>
            <div className={`${toggleFilters ? 'lg:flex lg:justify-between lg:w-full' : 'hidden'}  xl:block`}>
                <div className='mt-[20px] border-b pb-[15px] w-full'>
                    <p className='pb-[20px] text-lg font-medium'>Category</p>
                    <Category />
                </div>
            </div>
        </>
    )
}
