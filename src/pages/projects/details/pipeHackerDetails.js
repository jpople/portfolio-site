import pipeHackerSample from '../../../videos/pipeHackerSample.webm';

const pageText = (
    <>
        <p><i>Pipe Hacker II</i> was the first Unity project that I made completely solo without following a tutorial. The basic mechanic of placing pipes that connected to each other appealed to me as a small component of a larger, more complex game that I was brainstorming ideas for at the time, so I decided to try a bite-size version of it. That turned out to be wise.</p>
        
        <h2>What I learned making this</h2>
        <ul>
            <li>Coroutines and <code>Mathf.Lerp</code> for smooth movement between positions</li>
            <li>Sound effects and UI</li>
            <li>Scripting and using classes that aren't <code>MonoBehaviour</code></li>
            <li>Generating new game objects on the fly</li>
        </ul>
        <h2>Details I'm proud of</h2>
        <ul>
            <li>
                The code for the movement of the cursor includes a system that, when the movement is close to complete, accepts input and buffers the inputs in a queue so they'll execute when the cursor is finished moving.
            </li>
            <li>
                The pipe sprites flip themselves when needed to fill up from the correct end; I discovered that this problem existed fairly late in development and didn't want to make new sprites, so I managed to hack together a way to do it using rotations.
            </li>
        </ul>
        <h2>What I'd change now</h2>
        <ul>
            <li>
                The codebase is fairly poorly organized; nearly every class is overloaded and could be split into multiple to better separate concerns, and certain methods are very much in the wrong place.
            </li>
            <li>
                <p>The pipes in this are not prefabs; instead, the code in <code>PuzzleGenerator</code> creates an empty game object and adds all the necessary components in the script to add a pipe to the level.</p>
            </li>
        </ul>
        <p></p>
        <p></p>
    </>
);

const pipeHackerDetails = {
    title: "Pipe Hacker II",
    sourceLink: "https://github.com/jpople/pipe-hacking-ii",
    playLink: "https://auartic.itch.io/pipe-hacker-ii",
    videoLink: pipeHackerSample,
    pageText: pageText,
}
export default pipeHackerDetails;