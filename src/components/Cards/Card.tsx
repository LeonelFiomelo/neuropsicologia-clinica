import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

interface Props {
    img: string | StaticImport;
    name: string;
    lastName: string;
    title: string;
    text: string;
}

export default function Card({img, name, lastName, title, text}: Props) {

    // Option 1: Convert \n to <br /> tags
    const textWithBreaks = text.split("\n").map((paragraph, index) => (
        <React.Fragment key={index}>
        {paragraph}
        {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
    ))


    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg">
            <div className="mx-auto mt-4">
                <Image className="w-48 h-48 rounded-full" src={img} alt={`Foto de ${name} ${lastName}`} priority/>
            </div>
            <h5 className="text-2xl text-center font-semibold tracking-tight text-gray-800">{name} {lastName}, {title}</h5>
            <p className="mb-3 font-normal text-lg text-gray-500">{textWithBreaks}</p>
        </div>
    )
}