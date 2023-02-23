import React from "react";

export function PortfolioItem({title, imgUrl, stack, link}) {
    return(
        <div className="border-2 border-stone-500 rounded-md overflow-hidden">
            <img src={imgUrl} alt="img-project" className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-x1 mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm">
                    {/* Navegando pelo array do stack*/}
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-500 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}