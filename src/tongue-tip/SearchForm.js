import { Form, Button, Row, Col } from "react-bootstrap";
import relationOptions from "./relationOptions";

export default function SearchForm({ handleSearch, handleUpdateText, handleUpdateRelationType, handleUpdateRelatedWord, handleUpdateTopicWord, queryParams, relations, topicWords, addNewRelation, deleteRelation, addNewTopicWord, deleteTopicWord }) {
    return(
        <>
            <p>A tool for finding a word that's on the tip of your tongue, powered by the <a href="https://www.datamuse.com/api/">[Datamuse API]</a>.</p>
            <p>Most parameters accept one "word" as defined by the database.  Some two-word phrases are considered one word.</p>
            <Form autoComplete="off" onSubmit={handleSearch}>
                <Form.Group controlId="meaning">
                    <Form.Label>Meaning</Form.Label>
                    <Form.Control 
                        type="input" 
                        name="ml" 
                        placeholder="e.g. 'present or found everywhere' → 'ubiquitous'" 
                        onChange={handleUpdateText}
                        value={queryParams.ml}
                    />
                </Form.Group>
                <Form.Group className="mt-3" controlId="pronunciation">
                    <Form.Label>Approximate pronunciation</Form.Label>
                    <Form.Control 
                        type="input" 
                        name="sl" 
                        placeholder="e.g. 'yukalayli' → 'ukulele'" 
                        onChange={handleUpdateText} 
                        value={queryParams.sl}
                    />
                </Form.Group>
                <Form.Group className="mt-3" controlId="spelling">
                    <Form.Label>Approximate spelling</Form.Label>
                    <Form.Control 
                        type="input" 
                        name="sp" 
                        placeholder="e.g. 'incandessant' → 'incandescent'" 
                        onChange={handleUpdateText} 
                        value={queryParams.sp}
                        aria-describedby="spellingTipBlock"
                        className="mb-1"
                    />
                    <Form.Text id="spellingTipBlock">This field supports the wildcards <code>*</code> for any number of unknown characters and <code>?</code> for exactly one unknown character.</Form.Text>
                </Form.Group>
                <h3 className="mt-3">Related Words</h3>
                <RelationSearch 
                    relations={relations}
                    handleUpdateRelationType={handleUpdateRelationType}
                    handleUpdateRelatedWord={handleUpdateRelatedWord}
                    addNewRelation={addNewRelation}
                    deleteRelation={deleteRelation}
                />
                <h2 className="mt-3">Context</h2>
                <p>Parameters below change the ordering of search results but not their contents.</p>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Left context</Form.Label>
                        <Form.Control 
                            type="input"
                            name="lc"
                            onChange={handleUpdateText}
                            value={queryParams.lc}
                            aria-describedby="leftContextTipBlock"
                            className="mb-1"
                        />
                        <Form.Text id="leftContextTipBlock">A word that occurs to the left of the target word in a sentence.</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Right context</Form.Label>
                        <Form.Control
                            type="input"
                            name="rc"
                            onChange={handleUpdateText}
                            value={queryParams.rc}
                            aria-describedby="rightContextTipBlock"
                            className="mb-1"
                        />
                        <Form.Text id="rightContextTipBlock">A word that occurs to the right of the target word in a sentence.</Form.Text>
                    </Form.Group>
                </Row>

                <TopicSearch
                    topicWords={topicWords}
                    handleUpdateTopicWord={handleUpdateTopicWord}
                    addNewTopicWord={addNewTopicWord}
                    deleteTopicWord={deleteTopicWord}
                />
                <Row className="mt-3">
                    <Col className="d-flex justify-content-center align-items-center">
                        <p className="pt-3"><a href="/projects">[back to projects]</a></p>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Form.Group>
                            <Button variant="outline-primary" type="submit" xs={4}>Search</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

function RelationSearch({ relations, handleUpdateRelationType, handleUpdateRelatedWord, addNewRelation, deleteRelation }) {
    return <>
        {relations.map((rel, index) => {
            return <Row key={index} className="mt-3">
                <Form.Group as={Col} xs={5} controlId={`relation-type-${index}`}>
                    <Form.Select 
                        aria-label="relation type" 
                        onChange={(event) => handleUpdateRelationType(event, index)}
                        value={rel.relCode}    
                    >
                        <option value=''>Choose relation type</option>
                        {Object.keys(relationOptions).map((key) => {
                            return <option 
                                value={key} 
                                key={key}
                            >
                                {relationOptions[key].optionLabel}
                            </option>
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId={`relation-keyword-${index}`}>
                    {rel.relCode === '' ?
                        <Form.Control
                            type="input"
                            name="related-word"
                            value={rel.value}
                            disabled    
                        /> :
                        <Form.Control
                            type="input"
                            name={`related-word-${index}`}
                            onChange={(event) => handleUpdateRelatedWord(event, index)}
                            value={rel.value}
                            placeholder={relationOptions[rel.relCode].exampleString}
                        />
                        }
                </Form.Group>
                <Col xs={2}>
                    <Button variant="outline-danger" type="button" onClick={() => deleteRelation(index)}>Remove</Button>
                </Col>
            </Row>;
        })}
        <Button variant="outline-light" type="button" className="mt-3" onClick={addNewRelation}>Add related word</Button>
    </>;
}

function TopicSearch({topicWords, handleUpdateTopicWord, addNewTopicWord, deleteTopicWord}) {
    return <>
        <h3 className="mt-3">Related Topics</h3>
        {topicWords.map((word, index) => {
            return <Row key={index} className="mt-3">
                <Form.Group as={Col} xs={10} controlId={`topic-word-${index}`}>
                    <Form.Control
                        type="input"
                        name="topic-word"
                        placeholder="e.g. 'music', 'mathematics'"
                        onChange={(event) => handleUpdateTopicWord(event, index)}
                        value={word}
                    />
                </Form.Group>
                <Form.Group as={Col} xs={2}>
                    <Button 
                        variant="outline-danger" 
                        type="button"
                        onClick={() => deleteTopicWord(index)}

                    >
                        Remove
                    </Button>
                </Form.Group>
                <Col xs={2}>
                </Col>
            </Row>
        })}
        <Button variant="outline-light" type="button" className="mt-3" onClick={addNewTopicWord}>Add topic word</Button>
    </>
}