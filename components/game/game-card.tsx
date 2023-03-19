import Image from "next/image";

export default function GameCard(props: any){
    const kdaNumbersStyle: string = `px-1`
    const kdaDeathStyle: string = `px-1 text-red-500`

    return(
        <div className="flex justify-center items-center">
            {/* <div className='flex justify-center items-center mr-6 h-10 w-10 bg-sky-600 rounded-full'>
                <h1 className='text-white text-base'>
                1
                </h1>
            </div> */}
            <div className="mb-2 border-[#2e2d4e] border flex justify-center items-center w-11/12 h-28 bg-[#222a5c] rounded-lg">
                <div className="text-center h-32 flex flex-col justify-center pl-4">
                    <h3 className="text-white text-xs font-semibold">
                        Ranked Solo
                    </h3>
                    <p className="text-white/80 text-xs">
                        10h ago
                    </p>
                    <h2 className="text-blue-500 text-lg font-bold">
                        WIN
                    </h2>
                    <p className="text-white/80 font-light text-sm">
                        24:47
                    </p>
                </div>
                <div className="mx-8">
                    <Image 
                        src="/champ-win.png"
                        width={197}
                        height={98}
                        alt="champ stats win"
                        className="w-min"
                    />
                </div>
                <div className="text-center h-32 flex flex-col justify-center">
                    <h3 className="pb-1 text-white text-sm font-semibold">
                        <span className={kdaNumbersStyle}>
                            4
                        </span>
                        /
                        <span className={kdaDeathStyle}>
                            2
                        </span>
                        /
                        <span className={kdaNumbersStyle}>
                            11
                        </span>
                    </h3>
                    <p className="pb-0.5 text-white/80 text-xs">
                        <span className="font-semibold pr-1 text-blue-500">
                            4.25
                        </span> 
                        KDA
                    </p>
                    <p className="pb-0.5 font-light text-white/80 text-xs">
                        208 CS (7)
                    </p>
                    <p className="text-white/80 font-light text-xs">
                        22 vision
                    </p>
                </div>
                <div className="mx-8">
                    <Image 
                        src="/items-win.png"
                        width={193}
                        height={94}
                        alt="items win"
                        className="w-min"
                    />
                </div>
                <div className="flex">
                    <div className="flex mr-1">
                        <Image 
                            src="/team-win.png"
                            width={33}
                            height={160}
                            alt="items win"
                            className="w-min"
                        />
                        <div>
                            <ul className="ml-1 font-light text-xs text-white/80">
                                <li>Faker</li>
                                <li>MukNoi</li>
                                <li className="text-white font-semibold">ILLUSORY</li>
                                <li>Billy</li>
                                <li>Promaster</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ml-2 mr-2">
                        <div className="flex mr-1">
                            <Image 
                                src="/team-win.png"
                                width={33}
                                height={160}
                                alt="items win"
                                className="w-min"
                            />
                            <div>
                                <ul className="ml-1 font-light text-xs text-white/80">
                                    <li>Faker</li>
                                    <li>MukNoi</li>
                                    <li className="font-semibold text-white">ILLUSORY</li>
                                    <li>Billy</li>
                                    <li>Promaster</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}