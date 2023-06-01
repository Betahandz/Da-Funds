import clip1 from './../clips/clip1.mp4';
import clip2 from './../clips/clip2.mp4';
import clip3 from './../clips/clip3.mp4';
import clip4 from './../clips/clip4.mp4';

const landingData = [
    {
        id: 1,
        src: clip1,
        headline: "We invest in smart people solving formidable Problems",
        goto: "SpaceX",
        // show: true,
    },
    {
        id: 2,
        src: clip2,
        headline: 'Zero to One: Notes on startup on how to build the future',
        goto: "Our Manifesto",
        // show: false,
    },
    {
        id: 3,
        src: clip3,
        headline: "Anatomy of Next: New World",
        goto: "Airbnb",
        // show: false,
    },
    {
        id: 4,
        src: clip4,
        headline: "Da Hubb Always come true",
        goto: "github Link",
        // show: false
    }
]

export {landingData};
