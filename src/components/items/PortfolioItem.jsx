import React from "react";

export function PortfolioItem({title, imgUrl, stack, link}) {
    return(
        <a href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-500 dark:border-stone-300 rounded-md overflow-hidden"
        >
            <img src={imgUrl} alt="img-project" className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-x1 mb-2 md:mb-3 font-semibold text-stone-700 dark:text-stone-300">{title}</h3>
                <p className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm text-stone-700 dark:text-stone-300">
                    {/* Navegando pelo array do stack*/}
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-600 dark:border-stone-300 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}