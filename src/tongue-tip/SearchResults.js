import {Spinner, Button} from 'react-bootstrap';

export default function SearchResults({ word, isLoading, returnToSearch }) {
    if (isLoading) {
        return <Spinner animation="border" variant="light" />
    }
    else {
        return <>
            <ul>
                {word.map((entry) => {
                    let text = entry.word;
                    if (entry.defs) {
                        text += ` - ${entry.defs[0]}`;
                    }
                    return <li key={word.indexOf(entry)}>{text}</li>; 
                })}
            </ul>
            <Button variant="outline-light" onClick={() => returnToSearch(true)}>New search</Button>
        </>
    }
}