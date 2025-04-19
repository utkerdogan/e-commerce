import React from "react";
import { aboutUsStat, teamMembers } from "../data";
import { TeamCard } from "../components/TeamMemberCard";
import { Icons } from "../components/Icons";

export function AboutUs () {

    return (
        <>
        <section>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
                <div className="w-full md:w-1/3 text-center md:text-left pb-8 px-10">
                <h4 className="hidden md:flex text-sm text-black font-bold uppercase mb-2">
                    About Company
                </h4>
                <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 py-4 md:py-8">
                        ABOUT US
                </h2>
                <p className="text-gray-600 mb-6">
                    We know how large objects will act, but things on a smaal scale just do not act that way.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
                    Get Quote Now
                </button>
                </div>
        
                <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                <img
                    src="https://picsum.photos/300/400"
                    className="md:w-full max-w-sm rounded-3xl"
                />
                </div>
            </div>
        </section>

        <section className="flex flex-col bg-white">
            <div className="flex flex-col md:flex-row justify-evenly px-6 md:px-20 py-24 gap-10 bg-gray-100 text-center md:text-left">
                
                <div className="md:w-1/3">
                    <h5 className="text-sm text-red-500 font-semibold mb-2">
                    Problems trying
                    </h5>
                    <h3 className="text-2xl font-bold text-gray-900">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </h3>
                </div>
        
                <div className="md:w-1/3 justify-center text-lg font-extrabold text-gray-500">
                    Problems trying to resolve the conflict between the two major realms of
                    Classical physics: Newtonian mechanics
                </div>
            </div>
    
            <div className="flex flex-col md:flex-row justify-evenly gap-16 md:gap-8 text-center py-20 px-6 bg-gray-100">
                {aboutUsStat.map((item, index) => (
                    <div key={index}>
                    <p className="text-4xl font-bold text-black pb-2">{item.value}</p>
                    <p className="text-lg font-semibold text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="py-16 px-4 bg-white flex justify-center items-center">
            <div className="max-w-4xl w-full">
                <video
                controls
                className="w-full rounded-2xl shadow-lg"
                >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                <TeamCard
                    key={index}
                    image={member.image}
                    username={member.username}
                    profession={member.profession}
                />
                ))}
            </div>
        </section>

        <section className="flex flex-col justify-center px-6 py-12 bg-gray-100 text-center gap-8">
                <div>
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-8">Big Companies Are Here</h2>
                    <h4 className="text-gray-700 max-w-xl mx-auto">Problems trying to resolve the conflict between 
                        the two major realms of Classical physics: Newtonian mechanics</h4>
                </div>
                <div>
                    <Icons />
                </div>
        </section>

        <section className="flex flex-col md:flex-row text-center md:text-start">

            <div className="flex-1 flex items-center justify-center bg-blue-500 p-12">
                <div className="max-w-md space-y-6">
                <p className="text-sm font-semibold">WORK WITH US</p>
                <h2 className="text-5xl font-bold md:text-4xl md:font-extrabold">Now Let’s grow Yours</h2>
                <p className="text-base text-blue-100">
                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                </p>
                <button className="px-10 py-3 bg-blue-500 border-white rounded-lg hover:bg-white hover:text-blue-600 transition">
                    Button
                </button>
                </div>
            </div>

            <div className="hidden md:flex">
                <img
                src="https://picsum.photos/600/600"
                className="w-full h-full object-cover"
                />
            </div>
        </section>
        </>
    );
};