import { teamMembers } from "../data";
import { TeamCard } from "./TeamMemberCard";

export function TeamMembers () {
    return(
        <section className="py-16 px-4 bg-gray-50"> 
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
    )
}