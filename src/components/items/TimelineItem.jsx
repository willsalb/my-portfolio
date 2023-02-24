import React from "react";

export function TimelineItem({year, title, duration, details}) {
    {/* border-l faz a linha da timline */}
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-stone-300">
            <li className="mb-10 ml-3 mt-1">
                {/*Circulo que fica em cada periodo da timeline */}
                <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border border-white" />
                {/*Tags da timeline */}
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-500 rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-500">
                        {title}
                    </h3>
                    {/*"my" -> margin vertical */}
                    <div className="my-1 text-sm font-normal leading-none text-stone-400">
                        {duration}
                    </div>
                </p>
                <p className="my-2 text-base font-normal text-stone-400">
                    {details}
                </p>
            </li>
        </ol>
    )
}