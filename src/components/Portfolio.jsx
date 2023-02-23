import React from "react";
import portfolio from "../data/portfolio";
import { PortfolioItem } from "./items/PortfolioItem";

export function Portfolio() {
    return(
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-3">
                {/*Interagindo com o portfolio, para aparecer cada item do porfolio */}
                {portfolio.map(project => (
                    <PortfolioItem 
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}