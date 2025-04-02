"use client"
import React,{ useState} from 'react'

export default function Avg_cal(){
    
    return(
        <div>
            <div className=" mt-[4%] flex justify-center">
                <h1 className=" text-4xl ">Average Calculator</h1>
            </div>
            <div className="mt-[4%]">
            <select className=" border rounded">
                    <option>Prime Numbers</option>
                    <option>Fibonacci Numbers</option>
                    <option>Even Numbers</option>
                    <option>Random Numbers</option>
                </select>
                
            </div>
        </div>
    )
}