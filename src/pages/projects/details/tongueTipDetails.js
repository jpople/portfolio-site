const pageText = (
    <>
        <p>My most complex React project to date.  I originally found the <a href="https://www.datamuse.com/api/">[Datamuse API]</a> on a list of public APIs for developers and thought it was both interesting and useful, so I wanted to make an easy interface for querying it.</p>
        <h2>What I learned making this</h2>
        <ul>
            <li>Using controlled components in complex forms</li>
            <li>Dynamically adding and removing parameters from a form</li>
            <li>Managing state in a single-page app with multiple views</li>
        </ul>
        <h2>Details I'm proud of</h2>
        <ul>
            <li>I'm quite pleased with the structure of this code; while there are possible refactors, I think it's very robust and will serve as a useful reference if I make anything else like this in the future.</li>
            <li>The interface for the related words has a lot of interrelated parts and complicated behavior(the user has to be able to add and remove them, and the input field for each has to update to respond to the selected relation type).</li>
            <li>Being able to choose a new search term or go back and edit your previous search is a really nice feature for an interface like this.</li>
        </ul>
        <h2>What I'd change now</h2>
        <ul>
            <li>There are a <i>lot</i> of props that get passed down through, in particular, the search form, because the state is very complicated. Some sort of nicer way to bundle those together would be helpful.</li>
        </ul>
        <ul>
            <li>Some things in the layout, like button positions or where I put the link, feel to me like they could be improved from a UX standpoint as well as visually, but I'm not sure what the best way to do it exactly would be.</li>
        </ul>
    </>
);

const tongueTipDetails = {
    title: "TongueTip",
    sourceLink: "https://github.com/jpople/portfolio-site/tree/main/src/tongue-tip",
    playLink: "/projects/tongue-tip/",
    playText: "use",
    videoLink: null,
    pageText: pageText
}

export default tongueTipDetails;