import { Form, Button, Row, Col } from "react-bootstrap";
import relationOptions from "./relationOptions";

export default function SearchForm({ handleSearch, handleUpdateText, handleUpdateRelationType, handleUpdateRelatedWord, relations, addNewRelation, deleteRelation }) {
    return(
        <Form autoComplete="off" onSubmit={handleSearch}>
            <Form.Group controlId="meaning">
                <Form.Label>Meaning</Form.Label>
                <Form.Control 
                    type="input" 
                    name="ml" 
                    placeholder="e.g. 'present or found everywhere' → 'ubiquitous'" 
                    onChange={handleUpdateText} 
                />
            </Form.Group>
            <Form.Group className="mt-3" controlId="pronunciation">
                <Form.Label>Approximate pronunciation</Form.Label>
                <Form.Control 
                    type="input" 
                    name="sl" 
                    placeholder="e.g. 'yukalayli' → 'ukulele'" 
                    onChange={handleUpdateText} 
                />
            </Form.Group>
            <Form.Group className="mt-3" controlId="spelling">
                <Form.Label>Approximate spelling</Form.Label>
                <Form.Control 
                    type="input" 
                    name="sp" 
                    placeholder="e.g. 'incandessant' → 'incandescent'" 
                    onChange={handleUpdateText} 
                    aria-describedby="spellingTipBlock"
                />
                <Form.Text id="spellingTipBlock">This field supports the wildcards <code>*</code> for any number of unknown characters and <code>?</code> for exactly one unknown character.</Form.Text>
            </Form.Group>
            <RelationSearch 
                relations={relations}
                handleUpdateRelationType={handleUpdateRelationType}
                handleUpdateRelatedWord={handleUpdateRelatedWord}
                addNewRelation={addNewRelation}
                deleteRelation={deleteRelation}
            />
            <Form.Group className="mt-3">
                <Button variant="outline-light" type="submit">Search</Button>
            </Form.Group>
        </Form>
    )
}

function RelationSearch({ relations, handleUpdateRelationType, handleUpdateRelatedWord, addNewRelation, deleteRelation }) {
    return <>
        {relations.map((rel, index) => {
            return <Row key={index} className="mt-3">
                <Form.Group as={Col} xs={5} controlId={`relation-type-${index}`}>
                    <Form.Select aria-label="relation type" onChange={(event) => handleUpdateRelationType(event, index)}>
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
                            disabled    
                        /> :
                        <Form.Control
                            type="input"
                            name={`related-word-${index}`}
                            onChange={(event) => handleUpdateRelatedWord(event, index)}
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