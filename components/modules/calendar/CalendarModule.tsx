import Image from 'next/image';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfToday,
  startOfWeek,
  parseISO,
  isSameDay,
  addMonths,
  subMonths
} from 'date-fns'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CalendarModule(props: any) {
  let { usersNotes, setSelectedDay, selectedDay, usersEmail, monthView } = props;
  let today = startOfToday();
  let firstDayCurrentMonth = startOfMonth(today);
  const router = useRouter();
  const [currentMonth, setCurrentMonth] = useState(selectedDay);
  const [userNotesDates, setUserNotesDates] = useState<any[]>([]);

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  })

  useEffect(() => {
    const userNotesDatesArr = usersNotes.map((note: any) => note.date);
    setUserNotesDates(userNotesDatesArr);
  }, [usersNotes, monthView]);

  function previousMonth() {
    let firstDayNextMonth = subMonths(currentMonth, 1 );
    setCurrentMonth(firstDayNextMonth);
  }

  function nextMonth() {
    let firstDayNextMonth = addMonths(currentMonth, 1 );
    setCurrentMonth(firstDayNextMonth);
    console.log(currentMonth)
  }

  return (
    <div className="flex justify-center items-center">
      <section className="w-full rounded-md">
        <div className="w-full flex justify-center items-center bg-gray-100/80 shadow-inner"> 
          <section className="pt-1 pb-7">
            <div className="pl-3 pt-6 flex items-center">
              <h2 className="flex-auto text-2xl font-light text-blackHeading">
                {format(currentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="flex items-center justify-center px-1.5 text-gray-700 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <Image
                  src={"/angle-left.png"}
                  width={210}
                  height={369}
                  alt="Arrow"
                  className='h-3 w-2 opacity-60 hover:opacity-80 transition-opacity'
                />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="ml-2 flex flex-none items-center justify-center px-1.5 text-gray-700 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <Image
                  src={"/angle-left.png"}
                  width={210}
                  height={369}
                  alt="Arrow"
                  className='h-3 w-2 opacity-60 hover:opacity-80 transition-opacity rotate-180'
                />
              </button>
            </div>
            <div className="tracking-wider text-gray-900 grid grid-cols-7 mt-4 text-sm font-medium leading-4 text-center">
              <div>SUN</div>
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
            </div>
            <div className="font-light border-[1px] drop-shadow-sm bg-[#f9fbfa] border-gray-300 grid grid-cols-7 my-2 text-md">
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
                    onClick={() => { 
                      setSelectedDay(day)
                      router.push(`/${usersEmail}/${day}`)
                    }}
                    className={classNames(
                      isEqual(day, selectedDay) && 'bg-blue-100',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'bg-blue-200 font-semibold',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-700',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'font-semibold bg-blue-300',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-blue-300',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-100 transition-colors',
                      (isEqual(day, selectedDay) && isToday(day)) &&
                        'bg-blue-200 font-semibold',
                      'font-regular text-sm flex pb-5 h-14 w-14 border-[0.5px] border-gray-300 items-center justify-center'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="relative bottom-5 h-0 w-14 flex justify-center">
                    {usersNotes ? 
                      userNotesDates.map((date: any) => isSameDay(parseISO(date), day) ? <div className="relative w-2 h-2 rounded-full bg-blue-500"></div> : <div></div>)
                      :
                      <div></div>
                    }
                  </div>

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


