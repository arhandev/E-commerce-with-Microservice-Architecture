import React from "react";
import { Link } from "react-router-dom";

function Card({ picture, listing, title }) {
    return (
        <div className="w-80 shadow-2xl">
            <div className="w-full">
                <div className="relative w-full bg-custom3">
                    <img src={picture} alt="picture" className="w-full" />
                    <div className="absolute top-1/3 text-white font-bold text-center text-4xl">
                        {title}
                    </div>
                </div>
                <ul className="list-disc list-inside ml-4 my-6">
                    {listing.map(item => (
                        <li className="text-custom1 font-bold">{item}</li>
                    ))}
                </ul>
                <div className="bg-custom1 py-4 rounded-b-xl">
                    <Link>
                        <h1 className="text-center text-2xl font-bold text-white">
                            Lihat Kelas
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
