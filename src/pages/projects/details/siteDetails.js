const pageText = (
    <>
        <p>
            This website! A project I threw together to show off my other work, and also keep my React skills from rusting after I had been focusing on game development for a few months.
        </p>
        <p>
            The site doesn't have a real backend, so all the information like what you're reading is hardcoded&mdash; <i>but</i> it's hardcoded as JSON objects, not unlike what a real backend would yield, and repeated elements are generated sensibly from those JSONs as React components.
        </p>
        <h2>What I learned making this</h2>
        <ul>
            <li>Basics of React Router</li>
            <li>Lots of new stuff about Bootstrap and React Bootstrap</li>
            <li>Hosting and deployment basics with Netlify</li>
        </ul>
        <h2>Details I'm proud of</h2>
        <ul>
            <li>The pseudo-cards which show the previews for each individual project were built and styled from scratch, my first time doing so with responsive design and breakpoints.</li>
            <li>The React Router system using URLs makes this work much more smoothly than the original setup I had, which used <code>useState</code> for the entire website.</li>
            <li>The code for this site is much more sensibly organized and modular than most code I've written in the past.</li>
        </ul>
        <h2>What I'd change now</h2>
        <ul>
            <li>
                I had initially planned to use Bootstrap for this page because I thought I'd be using Bootstrap's built-in components much more.  As it turned out, I needed lots of things to be tweaked slightly and have committed utility class abuse all over this site because of it.  If I were starting over today, I'd choose something like TailwindCSS that is built for that approach.
            </li>
            <li>
                This hopefully hasn't impacted the final product much, but I was not terribly responsible with my version control and branch management during development of this site; making more controlled, deliberate changes would have been better.
            </li>
        </ul>
    </>
);

const siteDetails = {
    title: "jeremypople.dev",
    sourceLink: "https://github.com/jpople/portfolio-site",
    playLink: "/",
    playText: "view",
    videoLink: null,
    pageText: pageText
}

export default siteDetails;