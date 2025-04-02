"use client"
import React,{ useState} from 'react'

export default function Avg_cal(){
    const [numberType, setNumberType]=useState("p")
    const [prevState, setPrevState] = useState([])
    const [currState, setCurrState] = useState([])
    const [avg, setAvg] = useState(null)

    const apiurls = {
        p:"http://20.244.56.144/evaluation-service/primes",
        f:"http://20.244.56.144/evaluation-service/fibo",
        e:"http://20.244.56.144/evaluation-service/even",
        r:"http://20.244.56.144/evaluation-service/rand"
    };

    return(
        <div className="">
            <div className=" mt-[4%] flex justify-center">
                <h1 className=" text-4xl ">Average Calculator</h1>
            </div>

            <div className="mt-[4%] flex justify-center">
            <select className=" border rounded">
                    <option>Prime Numbers</option>
                    <option>Fibonacci Numbers</option>
                    <option>Even Numbers</option>
                    <option>Random Numbers</option>
                </select>
            </div>

            <div className="mt-[4%] flex justify-center">
                <button className=" rounded bg-amber-500 hover:bg-green-400">Fetch nos.</button>
            </div>

            <div className=" mt-[4%] text-2xl ml-[24%]">
                <p>Prev State is : {JSON.stringify(prevState)}</p>
                <p>Current State is : {JSON.stringify(currState)}</p>
                <p>Average is : {avg !== null ? avg : "N/A"}</p>
            </div>
        </div>
    )
}