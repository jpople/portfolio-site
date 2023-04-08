import {Container, Col} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function TongueTip() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);

    const getWords = () => {
        setLoading(true);
        axios
            .get("https://api.datamuse.com/words?ml=duck&sp=b*")
            .then((res) => {
                console.log(res);
                setLoading(false);
                setResult(res.data);
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                return null;
            });
    }

    useEffect(() => {
        getWords();
    }, []);

    return (
        <Container className="App-header flex-fill align-items-center justify-content-center">
            <Col className='col-sm-6 justify-content-center'>
                <div className="mt-4 p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                    <h1>TongueTip</h1>
                    <p className="pt-2">This part is just a placeholder so far!</p>
                    <ul>
                        {result.map((entry) => {
                            return <li>{entry.word}</li>;
                        })}
                    </ul>
                </div>
            </Col>
        </Container>
    )
}