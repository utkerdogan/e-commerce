import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logos } from "../data";

export function Icons(){
    return(
        <section className="flex flex-col md:flex-row items-center justify-evenly p-8 bg-gray-100 gap-8 md:gap-0">
            {logos.map((logo, index) => (
                <FontAwesomeIcon
                key={index}
                icon={logo.icon}
                title={logo.name}
                className="text-6xl text-gray-700 grayscale"
                />
            ))}
        </section>
    )
}