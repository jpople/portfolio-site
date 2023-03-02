const pageText = (
    <>
        <p>
            One of my earliest independent React projects.  Like many people in 2021ish, I had a sudden interest in pen-and-paper logic puzzles spurred on by the YouTube channel <i>Cracking the Cryptic</i>.  A friend introduced me to Aquarium, and I found it very charming, so I decided I'd try to make an interface for them myself.
        </p>
        <p>
            The source code in the link is the original; I've made some very slight changes to the version that's on this site to match the aesthetic, but the rest is fairly old.  Notably, it's from when hooks were brand new and I thought they were sort of scary, so it uses the old approach of making each component its own class with a <code>render()</code> method instead of a function that returns an element, and doesn't use <code>useState()</code>. I know better now!
        </p>
        <h2>What I learned making this</h2>
        <ul>
            <li>React!</li>
            <li>How to handle multidimensional arrays of React components</li>
        </ul>
        <h2>Details I'm proud of</h2>
        <ul>
            <li>Fill mode is a very cool little mechanic for Aquariums that can be a little fiddly, but that I managed to implement in a pretty robust way.</li>
            <li>The header hints, while I don't personally prefer them so I made them optional, are a nice QOL addition that makes the game feel very responsive.</li>
        </ul>
        <h2>What I'd change now</h2>
        <ul>
            <li>
                As mentioned above, a lot of this code is a bit outdated.  It should certainly be updated to no longer use the <code>constructor(props)</code> syntax, at the very least.
            </li>
            <li>
                The way I draw the borders between the different tanks results in the corners looking a bit weird; an alternative approach, perhaps generating new <code>div</code>s to serve as the borders, would be visually cleaner.
            </li>
            <li>
                The entirety of the source code is in one 300+-line monster file that's absolutely riddled with magic numbers and random helper methods.  It definitely needs some refactoring and reorganization.
            </li>
        </ul>
    </>
);

const aquariumDetails = {
    title: "ReactAquarium",
    sourceLink: "https://github.com/jpople/reactaquarium",
    playLink: "/projects/aquarium/play/",
    videoLink: null,
    pageText: pageText
}

export default aquariumDetails;