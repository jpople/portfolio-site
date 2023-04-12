import {Container, Col} from 'react-bootstrap';
import React, {useState} from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

export default function TongueTip() {
    const [isSearching, setIsSearching] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [queryParams, setQueryParams] = useState({
        ml: ''
    });

    const handleSearch = () => {
        const queryString = prepareQueryString();
        setIsSearching(false);
        setIsLoading(true);
        axios
            .get(queryString)
            .then((res) => {
                setSearchResult(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
                setIsSearching(true);
                return null;
            });
    }

    const handleUpdateQuery = (event) => {
        const name = event.target.name;
        const value = encodeURIComponent(event.target.value);
        setQueryParams(values => ({...values, [name]: value}));
    }

    const prepareQueryString = () => {
        // we assume, for now, there's never an empty query
        return `https://api.datamuse.com/words?ml=${queryParams.ml}&md=d&max=20`;
    }

    const returnToSearch = () => {
        setIsSearching(true);
    }

    return (
        <Container className="App-header flex-fill align-items-center justify-content-center">
            <Col className='col-sm-6 justify-content-center'>
                <div className="mt-4 p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                    <h1>TongueTip</h1>
                    {isSearching ? 
                        <SearchForm handleSearch={handleSearch} handleUpdate={handleUpdateQuery} /> 
                        : 
                        <SearchResults word={searchResult} isLoading={isLoading} returnToSearch={returnToSearch} />
                    }
                </div>
            </Col>
        </Container>
    )
}