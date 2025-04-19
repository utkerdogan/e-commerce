import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";


export function TeamCard ({ image, username, profession }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4">
            <img
                src={image}
                alt={username}
                className="rounded-xl "
            />
            <h3 className="font-bold text-xl text-black ">{username}</h3>
            <p className="text-gray-500">{profession}</p>
            <div className="flex space-x-4">
                <Facebook className="text-sky-400 hover:scale-110 transition-transform cursor-pointer" />
                <Instagram className="text-sky-400 hover:scale-110 transition-transform cursor-pointer" />
                <Twitter className="text-sky-400 hover:scale-110 transition-transform cursor-pointer" />
            </div>
        </div>
    );
};

