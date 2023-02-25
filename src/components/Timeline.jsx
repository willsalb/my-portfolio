import React from "react";
import timeline from "../data/timeline";
import { TimelineItem } from "./items/TimelineItem";
import { Title } from "./Ttile";

export function Timeline() {
    {/*A primeira div é para toda a sessão e a segunda div é para cada item da sessão */}
    return(
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Linha do Tempo</Title>
                {/*Percorrendo o array da timeline.data */}
                {timeline.map(item => (
                    <TimelineItem 
                        year={item.year}
                        title={item.title}
                        details={item.details}
                        duration={item.duration}
                    />
                ))}
            </div>
        </div>
    )
}