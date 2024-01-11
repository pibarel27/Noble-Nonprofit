import React from "react"

export function Footer() {
    return (
        
        <footer className='  text-white class="w-full h-34 bg-[#176B87] static bottom-0"'>
     
            <div className='  max-w-[1240px] mx-auto py-2 text-sm sm:text-base'>
                
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-center'>© Copyright 2023 Chingu Pvt. Ltd. | All Rights Reserved</p>
                    <a href='https://www.facebook.com/chingu.pvt.ltd'
                       target="_blank"
                       rel="noreferrer"
                       className='hover:text-gray-300 transition'
                    >
                        Created by Chingu Pvt. Ltd.
                    </a>
                </div>
            </div>
        </footer>
    )
}
