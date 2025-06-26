import React from 'react'
import bluemain from "../assets/images/blue_main.png";

const Loading = () => {
    return (
        <div class="flex justify-center w-20 h-20 items-center">
            <div class="relative w-full h-full flex items-center justify-center bg-transparent">
                <div class="atom-path-1">
                    <div class="electron"></div>
                </div>
                <div class="atom-path-2">
                    <div class="electron"></div>
                </div>
                <div class="atom-path-3">
                    <div class="electron"></div>
                </div>
                <img src={bluemain} alt="" className="w-8 h-6" />
            </div>
        </div>
    )
}

export default Loading
