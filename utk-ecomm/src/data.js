import {
    faAmazon,
    faLyft,
    faStripe,
    faRedditAlien,
    faPiedPiperHat,
} from "@fortawesome/free-brands-svg-icons";

export const images = [
    "https://picsum.photos/800/300?random=1",
    "https://picsum.photos/800/300?random=2",
    "https://picsum.photos/800/300?random=3"
];

export const products = new Array(8).fill({
    title: "Graphic Design",
    subtitle: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["bg-cyan-500", "bg-orange-500", "bg-teal-500", "bg-blue-500"],
});

export const posts = [
    {
        id: 1,
        image: "https://picsum.photos/800/300?random=14",
        title: "Loudest à la Madison #1 (L’Integral)",
        description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        tags: ["Google", "Trending", "New"],
        isNew: true,
    },
    {
        id: 2,
        image: "https://picsum.photos/800/300?random=15",
        title: "Loudest à la Madison #1 (L’Integral)",
        description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
        date: "22 April 2021",
        comments: 12,
        tags: ["Google", "Trending", "New"],
        isNew: true,
    },
    {
        id: 3,
        image: "https://picsum.photos/800/300?random=16",
        title: "Loudest à la Madison #1 (L’Integral)",
        description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
        date: "22 April 2021",
        comments: 14,
        tags: ["Google", "Trending", "New"],
        isNew: true,
    },
];

export const categories = [
    {
        id: 1,
        title: "CLOTHS",
        items: 5,
        image: "https://picsum.photos/600/800?random=1",
    },
    {
        id: 2,
        title: "CLOTHS",
        items: 5,
        image: "https://picsum.photos/600/800?random=2",
    },
    {
        id: 3,
        title: "CLOTHS",
        items: 5,
        image: "https://picsum.photos/600/800?random=3",
    },
    {
        id: 4,
        title: "CLOTHS",
        items: 5,
        image: "https://picsum.photos/600/800?random=4",
    },
    {
        id: 5,
        title: "CLOTHS",
        items: 5,
        image: "https://picsum.photos/600/800?random=5",
    },
];


export const logos = [
    { icon: faLyft,},
    { icon: faStripe},
    { icon: faPiedPiperHat},
    { icon: faAmazon},
    { icon: faRedditAlien},
];