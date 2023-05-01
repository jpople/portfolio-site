import phiiScreenshot from '../../images/pipe-hacker-screenshot.png';
import usgScreenshot from '../../images/sword-game-screenshot.png';
import aquaScreenshot from '../../images/aquarium-screenshot.png';
import siteScreenshot from '../../images/site-screenshot-1.png';
import tonguetipScreenshot from '../../images/tonguetip-screenshot-1.png'

const projectList = [
    {
        title: "TongueTip",
        desc: <p>A single-page web app for finding a word that you can't think of, based on its meaning, contexts where it's likely to appear and more.  It uses Axios to asynchronously query the <a href="https://www.datamuse.com/api/">[Datamuse API]</a>.</p>, 
        screenshotSrc: tonguetipScreenshot,
        playLink: "/projects/tongue-tip",
        playText: "use",
        infoLink: "/projects/tongue-tip/about"
    },
    {
        title: "Untitled Sword Game",
        desc: <p>A proof-of-concept for a Unity sidescroller, featuring custom physics and combat with a posture mechanic inspired by <i>Sekiro: Shadows Die Twice</i>.</p>,
        screenshotSrc: usgScreenshot,
        playLink: "https://auartic.itch.io/untitled-sword-game",
        playText: "play",
        infoLink: "/projects/untitled-sword-game/about"
    },{
        title: "jeremypople.dev",
        desc: <p>The site you're currently reading. This site was implemented in React using React Router and styled mostly using customized Bootstrap.</p>,
        screenshotSrc: siteScreenshot,
        playLink: "/",
        playText: "view",
        infoLink: "/projects/site/about"
    },{
        title: "Pipe Hacker II",
        desc: <p>My first Unity project: a version of the NES classic <i>Pipe Dream</i>, or as I knew it when I named this project, the hacking minigame from <i>BioShock</i>.</p>,
        screenshotSrc: phiiScreenshot,
        playLink: "https://auartic.itch.io/pipe-hacker-ii",
        playText: "play",
        infoLink: "/projects/pipe-hacker-ii/about"
    },{
        title: "ReactAquarium",
        desc: <p>A lightly updated version of an old project: a React interface for solving Aquariums, a cute little genre of pen-and-paper logic puzzle that I'm very fond of.</p>,
        screenshotSrc: aquaScreenshot,
        playLink: "/projects/aquarium/play",
        playText: "play",
        infoLink: "/projects/aquarium/about"
    }
];

export default projectList;