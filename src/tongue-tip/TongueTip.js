import {Container, Col} from 'react-bootstrap';
import React, {useState} from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

export default function TongueTip() {
    const emptyQuery = {
        ml: '',
        sl: '',
        sp: '',
        lc: '',
        rc: '',
    }

    const [isSearching, setIsSearching] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [queryParams, setQueryParams] = useState(emptyQuery);
    const [relatedWords, setRelatedWords] = useState([]);
    const [topicWords, setTopicWords] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
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
        setQueryParams(values => ({...values, [event.target.name]: event.target.value}));
    }

    const handleUpdateTopicWord = (event, index) => {
        const topics = [...topicWords];
        topics[index]= event.target.value;
        setTopicWords(topics);
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
        Object.keys(queryParams).forEach((key) => {
            if(queryParams[key] !== '') {
                let param = `&${key}=${encodeURIComponent(queryParams[key])}`;
                query += param;
            }
        });
        relatedWords.forEach((word) => {
            if (word.relCode !== '' && word.value !== '') {
                query += `&rel_${word.relCode}=${word.value}`;
            }
        })
        let topicString = '&topics='
        topicWords.forEach((word) => {
            if (word !== '') {
                topicString += `${word}%20`;
            }
        })
        if (topicString !== '&topics=') {
            query += topicString;
        }
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

    const addNewTopicWord = () => {
        setTopicWords([...topicWords, '']);
    }

    const deleteTopicWord = (index) => {
        const updatedTopicWords = topicWords.toSpliced(index, 1);
        setTopicWords(updatedTopicWords);
    }

    return (
        <Container className="App-header flex-fill align-items-center justify-content-center">
            <Col className='col-lg-6 justify-content-center'>
                <div className="mt-4 p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
                    <h1>TongueTip</h1>
                    {isSearching ? 
                        <SearchForm 
                            handleSearch={handleSearch} 
                            handleUpdateText={handleUpdateQuery}
                            handleUpdateRelationType={handleUpdateRelationType}
                            handleUpdateRelatedWord={handleUpdateRelatedWord}
                            handleUpdateTopicWord={handleUpdateTopicWord}
                            queryParams={queryParams}
                            relations={relatedWords}
                            topicWords={topicWords}
                            addNewRelation={addNewRelation}
                            deleteRelation={deleteRelation}
                            addNewTopicWord={addNewTopicWord}
                            deleteTopicWord={deleteTopicWord}
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