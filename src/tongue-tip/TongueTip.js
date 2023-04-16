import {Container, Col} from 'react-bootstrap';
import React, {useState} from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import relationOptions from './relationOptions';

export default function TongueTip() {
    const emptyQuery = {
        ml: '',
        sl: '',
        sp: '',
        rel_jjb: '',
        rel_syn: ''
    }

    const [isSearching, setIsSearching] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [queryParams, setQueryParams] = useState(emptyQuery);
    const [selectedRel, setSelectedRel] = useState('');

    const handleSearch = () => {
        console.log(queryParams);
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
        let query = `https://api.datamuse.com/words?md=d&max=20`;
        // gotta be some nice way to do this programmatically, right...?
        if (queryParams.ml !== '') {
            query += `&ml=${queryParams.ml}`;
        }
        if (queryParams.sl !== '') {
            query += `&sl=${queryParams.sl}`;
        }
        if (queryParams.sp !== '') {
            query += `&sp=${queryParams.sp}`;
        }
        if (queryParams.rel_jjb !== '') {
            query += `&rel_jjb=${queryParams.rel_jjb}`;
        }
        if (queryParams.rel_syn !== '') {
            query += `&rel_syn=${queryParams.rel_syn}`;
        }
        console.log(query);
        return query;
    }

    const returnToSearch = () => {
        setQueryParams(emptyQuery);
        setSelectedRel('');
        setIsSearching(true);
    }

    const handleSelectType = (event) => {
        setSelectedRel(event.target.value);
    }

    return (
        <Container className="App-header flex-fill align-items-center justify-content-center">
            <Col className='col-sm-6 justify-content-center'>
                <div className="mt-4 p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                    <h1>TongueTip</h1>
                    {isSearching ? 
                        <SearchForm 
                            handleSearch={handleSearch} 
                            handleUpdate={handleUpdateQuery}
                            handleSelectType={handleSelectType} 
                            relationOptions={relationOptions}
                            selectedRelation={selectedRel}
                        /> 
                        : 
                        <SearchResults 
                            word={searchResult} 
                            isLoading={isLoading} 
                            returnToSearch={returnToSearch} 
                        />
                    }
                </div>
            </Col>
        </Container>
    );
}