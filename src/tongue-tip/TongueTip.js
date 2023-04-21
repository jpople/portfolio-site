import {Container, Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

export default function TongueTip() {
    const emptyQuery = {
        ml: '',
        sl: '',
        sp: '',
    }

    const [isSearching, setIsSearching] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [queryParams, setQueryParams] = useState(emptyQuery);
    const [relatedWords, setRelatedWords] = useState([]);

    useEffect(() => {
        console.log(relatedWords);
    }, [relatedWords])

    const handleSearch = (event) => {
        event.preventDefault();
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

    const handleUpdateRelationType = (event, index) => {
        const relations = [...relatedWords];
        relations[index].relCode = event.target.value;
        setRelatedWords(relations);
    }

    const handleUpdateRelatedWord = (event, index) => {
        const relations = [...relatedWords];
        relations[index].value = event.target.value;
        setRelatedWords(relations);
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
        relatedWords.forEach((word) => {
            if (word.relCode !== '' && word.value !== '') {
                query += `&rel_${word.relCode}=${word.value}`;
            }
        })
        console.log(query);
        return query;
    }

    const returnToSearch = (reset) => {
        if(reset) {
            setQueryParams(emptyQuery);
            setRelatedWords([]);
        }
        setIsSearching(true);
    }

    const addNewRelation = () => {
        const newRelation = {
            relCode: "",
            value: ""
        };
        setRelatedWords([...relatedWords, newRelation]);
    }

    const deleteRelation = (index) => {
        const updatedRelations = relatedWords.toSpliced(index, 1);
        setRelatedWords(updatedRelations);
    }

    return (
        <Container className="App-header flex-fill align-items-center justify-content-center">
            <Col className='col-sm-6 justify-content-center'>
                <div className="mt-4 p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                    <h1>TongueTip</h1>
                    {isSearching ? 
                        <SearchForm 
                            handleSearch={handleSearch} 
                            handleUpdateText={handleUpdateQuery}
                            handleUpdateRelationType={handleUpdateRelationType}
                            handleUpdateRelatedWord={handleUpdateRelatedWord}
                            relations={relatedWords}
                            addNewRelation={addNewRelation}
                            deleteRelation={deleteRelation}
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