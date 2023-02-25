import React from "react";

export function TimelineItem({year, title, duration, details}) {
    {/* border-l faz a linha da timline */}
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-stone-300 dark:border-stone-600">
            <li className="mb-10 ml-3 mt-1">
                {/*Circulo que fica em cada periodo da timeline */}
                <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border border-stone-300 dark:border-stone-600 dark:bg-stone-500" />
                {/*Tags da timeline */}
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-stone-200 bg-stone-500 dark:text-stone-700 dark:bg-stone-200 rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-500 dark:text-stone-200">
                        {title}
                    </h3>
                    {/*"my" -> margin vertical */}
                    <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-300">
                        {duration}
                    </div>
                </p>
                <p className="my-2 text-base font-normal text-stone-900 dark:text-stone-300">
                    {details}
                </p>
            </li>
        </ol>
    )
}