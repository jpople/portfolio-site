import {Spinner, Button, Col} from 'react-bootstrap';

export default function SearchResults({ word, isLoading, returnToSearch }) {

    if (isLoading) {
        return <Spinner animation="border" variant="light" />
    }
    else {
        return <>
            <ul>
                {word.map((entry) => {
                    return <SingleResult data={entry} key={word.indexOf(entry)} />
                })}
            </ul>
            <Col className="d-flex justify-content-around">
                <Button variant="outline-light" onClick={() => returnToSearch(true)}>New search</Button>
                <Button variant="outline-light" onClick={() => returnToSearch(false)}>Refine previous search</Button>
            </Col>
        </>
    }
}

function SingleResult({data}) {
    const parsedData = {
        def: "",
        partOfSpeech: ""
    }
    if (data.defs) {
        const firstWord = data.defs[0].substring(0, data.defs[0].indexOf("\t"));
        switch(firstWord) {
            case "n":
                parsedData.partOfSpeech = "(noun)";
                break;
            case "v":
                parsedData.partOfSpeech = "(verb)";
                break;
            case "adj":
                parsedData.partOfSpeech = "(adjective)";
                break;
            case "adv":
                parsedData.partOfSpeech = "(adverb)";
                break;
        }
        if (parsedData.partOfSpeech !== "") {
            parsedData.def = data.defs[0].slice(data.defs[0].indexOf("\t"));
        }
        else {
            parsedData.def = data.defs[0];
        }
    }
    else {
        parsedData.def = "No definitions found";
    }
    return <>
        <h4><strong>{data.word}</strong> {parsedData.partOfSpeech}</h4>
        <p>{parsedData.def}</p>
    </>
}