import React, { useEffect, useState } from "react";

export default function Calendar(){
    let date = new Date()
    let [days, setDays] = useState<any>()
    let [currentDate, setCurrentDate] = useState<any>()
    let [currentYear, setCurrentYear] = useState<any>(date.getFullYear())
    let [currentMonth, setCurrentMonth] = useState<any>(date.getMonth())

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const renderCalendar = () => {
        let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
        let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
        let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay()
        let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate()
        let liTag = []

        for (let i = firstDayOfMonth; i > 0; i--) {
            liTag.push(<li className="w-day inactive-day">{lastDateOfLastMonth - i + 1}</li>)
        }
        
        for (let i = 1; i <= lastDateOfMonth; i++) {
            let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active-day" : "";
            liTag.push(<li className="w-day ${isToday}">{i}</li>)
        }

        for (let i = lastDayOfMonth; i < 6; i++) {
            liTag.push(<li className="w-day inactive-day">{i - lastDayOfMonth + 1}</li>)
        }
        setCurrentDate(`${months[currentMonth]} ${currentYear}`)
        setDays(liTag)
    }

    const prevNextIcons = (id: string) => {
        id === "prev" ? setCurrentMonth(currentMonth - 1) : setCurrentMonth(currentMonth + 1)

        if(currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth, new Date().getDate())
            currentYear = date.getFullYear()
            currentMonth = date.getMonth()
        } else { 
            date = new Date()
        }
        renderCalendar()
        console.log(currentMonth)
    }

    useEffect(() => {renderCalendar()}, [prevNextIcons])
        
    return(
        <div className="rounded-md bg-slate-100 w-1/2">
            <header className="px-6 py-6 flex justify-between">
                <h1 className="text-2xl font-bold"
                    id="current-date"
                >
                    {currentDate}
                </h1>
                <div className="space-x-6 flex">
                    <button id="prev" className="prevNextIcon cursor-pointer" 
                    onClick={() => prevNextIcons("prev")}>
                        prev
                    </button>
                    <button id="next" className="prevNextIcon cursor-pointer"
                    onClick={() => prevNextIcons("next")}>
                        next
                    </button>
                </div>
            </header>
            <div id="calendar">
                <ul className="flex-wrap text-center font-semibold px-6 justify-between flex">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul id="days" className="flex flex-wrap text-center">
                    {days}
                </ul>
            </div>
        </div>
    )
}