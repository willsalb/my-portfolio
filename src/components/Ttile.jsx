import React from "react";

export function Title({ id, children}) {
    return (
        <h1 id={id && id} className="text-2x1 font-bold underline underline-offset-4 decoration-2 mb-5 text-stone-500 dark:text-stone-200 text-xl">
            {children}
        </h1>
    )
}