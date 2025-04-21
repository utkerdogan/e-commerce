import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { TeamMembers } from "../components/TeamMembers";

export function Team () {
    return(
        <>
        <section>
            <div className="bg-white px-4 md:px-12 py-6 h-auto text-center">
                <p className="text-sm text-gray-600">WHAT WE DO</p>
                <h1 className="text-slate-800 text-4xl md:text-5xl font-bold mt-2 mb-4 px-8">
                Innovation tailored for you
                </h1>
                <div className="text-sm text-gray-500">
                <span className="font-semibold text-black">Home</span>
                <span className="mx-2">{">"}</span>
                <span>Team</span>
                </div>
            </div>
            <div className="flex bg-white h-full w-full gap-2 flex-col items-center justify-center md:flex-row">
                
                    <img src="https://picsum.photos/600/700?random=17" className="md:w-1/2 h-full object-cover"/>
                
                <div className="md:w-1/2 grid grid-cols-2 gap-2">
                    <img src="https://picsum.photos/600/700?random=18" className="w-full h-full object-cover" />
                    <img src="https://picsum.photos/600/700?random=18" className="w-full h-full object-cover" />
                    <img src="https://picsum.photos/600/700?random=18" className="w-full h-full object-cover" />
                    <img src="https://picsum.photos/600/700?random=18" className="w-full h-full object-cover" />
                </div>
            </div>

        </section>
        <section>
            <TeamMembers />
        </section>
        <section>
            <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white ">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 px-10">
                    Start your 14 days free trial
                </h1>
                <p className="text-gray-500 text-sm md:text-xl mb-6 max-w-md">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded mb-6">
                    Try it free now
                </button>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <Twitter className="text-blue-400 text-xl" />
                    <Facebook className="text-blue-800 text-xl" />
                    <Instagram className="text-gray-800 text-xl" />
                    <Linkedin className="text-blue-600 text-xl" />
                </div>
            </div>
        </section>
        </>
    )
}