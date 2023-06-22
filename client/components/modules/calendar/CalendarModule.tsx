import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  add,
  eachDayOfInterval,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import { Fragment, useEffect, useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CalendarModule(props: any) {
  let today = startOfToday()
  let { usersNotes, setSelectedDay } = props;
  let selectedDay = parseISO(props.selectedDay)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const [displayedSelectedDay, setDisplayedSelectedDay] = useState()
  let firstDayCurrentMonth = startOfMonth(today);

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  return (
    <div className="flex justify-center items-center">
      <section className="w-full rounded-md">
        <div className="w-full flex justify-center items-center bg-gray-100 shadow-inner"> 
          <section className="pb-2">
            <div className="pl-0 pt-6 flex items-center">
              <h2 className="flex-auto text-2xl font-regular text-black">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-0 flex flex-none items-center justify-center px-1.5 text-gray-700 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-0 -mr-1.5 ml-2 flex flex-none items-center justify-center px-1.5 text-gray-700 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-4 text-sm font-regular leading-6 text-center text-gray-900">
              <div>SUN</div>
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
            </div>
            <div className="border-[0.5px] border-gray-300 grid grid-cols-7 my-2 text-md">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    ''
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isSameDay(day, selectedDay) && 'bg-gray-300 font-semibold',
                      !isSameDay(day, selectedDay) &&
                        isToday(day) &&
                        'bg-blue-200',
                      !isSameDay(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-600',
                      !isSameDay(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isSameDay(day, selectedDay) && isToday(day) && 'bg-blue-200',
                      isSameDay(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-300',
                      !isSameDay(day, selectedDay) && 'hover:bg-gray-200/50',
                      (isSameDay(day, selectedDay) && isToday(day)) &&
                        'bg-blue-200 font-semibold',
                      'font-regular text-sm flex pb-5 h-14 w-14 border-[0.5px] border-gray-300 items-center justify-center'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]


