import React from "react";

export function Intro() {
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-6xl dark:text-white mb-2 md:mb-3 font-bold">Will</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Desenvolvedor de sistemas</p>
            <p className="text-sm max-w-xl mb-3 font-bold">
                Comecei minha carreira como jovem aprendiz no setor de marketing fiz uma transição de carreira para a area de T.I 
                atualmente estou sendo desenvolvedor de sistemas/suporte de T.I, cursando 
                o terceiro periodo da faculdade de marketing, mas já com um futuro em análise e desenvolvimento de sistemas.
            </p>
        </div>
    )
}