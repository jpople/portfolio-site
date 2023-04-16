import { Form, Button, Row, Col } from "react-bootstrap";

export default function SearchForm({ handleSearch, handleUpdate, handleSelectType, relationOptions, selectedRelation }) {
    return(
        <Form autoComplete="off" onSubmit={handleSearch}>
            <Form.Group controlId="meaning">
                <Form.Label>Meaning</Form.Label>
                <Form.Control 
                    type="input" 
                    name="ml" 
                    placeholder="e.g. 'present or found everywhere' → 'ubiquitous'" 
                    onChange={handleUpdate} 
                />
            </Form.Group>
            <Form.Group className="mt-3" controlId="pronunciation">
                <Form.Label>Approximate pronunciation</Form.Label>
                <Form.Control 
                    type="input" 
                    name="sl" 
                    placeholder="e.g. 'yukalayli' → 'ukulele'" 
                    onChange={handleUpdate} 
                />
            </Form.Group>
            <Form.Group className="mt-3" controlId="spelling">
                <Form.Label>Approximate spelling</Form.Label>
                <Form.Control 
                    type="input" 
                    name="sp" 
                    placeholder="e.g. 'incandessant' → 'incandescent'" 
                    onChange={handleUpdate} 
                    aria-describedby="spellingTipBlock"
                />
                <Form.Text id="spellingTipBlock">This field supports the wildcards <code>*</code> for any number of unknown characters and <code>?</code> for exactly one unknown character.</Form.Text>
            </Form.Group>
            <Row className="mt-3">
                {/* <Form.Group as={Col} xs={5} controlId="relation-type">
                    <Form.Select aria-label="Select relation type">
                        <option>Select relation type</option>
                        <optgroup label="Semantic">
                            <option value="syn">Synonym of</option>
                            <option value="ant">Antonym of</option>
                            <option value="spc">More specific than</option>
                            <option value="gen">Less specific than</option>
                            <option value="com">Part of</option>
                            <option value="par">Comprises</option>
                        </optgroup>
                        <optgroup label="Phonetic">
                            <option value="hom">Homophone of</option>
                            <option value="cns">Same consonants as</option>
                            <option value="rhy">Strictly rhymes with</option>
                            <option value="nry">Loosely rhymes with</option>
                        </optgroup>
                        <optgroup label="Contextual">
                            <option value="jja">Often modifies</option>
                            <option value="jjb">Often modified by</option>
                            <option value="trg">Appears in same text with</option>
                            <option value="bga">Often precedes</option>
                            <option value="bgb">Often follows</option>
                        </optgroup>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="relation-keyword">
                    <Form.Control
                        type="input"
                        name="rel_jjb"
                        placeholder="e.g. '' → ''"
                        onChange={handleUpdate}
                    />
                </Form.Group> */}
                <RelationSearch 
                    handleUpdate={handleUpdate} 
                    handleSelectType={handleSelectType}
                    relationOptions={relationOptions}
                    selectedRelation={selectedRelation}
                />
            </Row>
            <Form.Group className="mt-3">
                <Button variant="outline-light" type="submit">Search</Button>
            </Form.Group>
        </Form>
    )
}

function RelationSearch({ handleSelectType, handleUpdate, relationOptions, selectedRelation }) {
    return <>
        <Form.Group as={Col} xs={5} controlId="relation-type">
            <Form.Select aria-label="Select relation type" onChange={handleSelectType}>
                <option value=''>Select relation type</option>
                {Object.keys(relationOptions).map((key) => {
                    return <option value={key} key={key}>{relationOptions[key].optionLabel}</option>
                })}
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="relation-keyword">
            {selectedRelation === '' ?
                <Form.Control
                    type="input"
                    name="related-word"
                    placeholder={""}
                    disabled
                /> :
                <Form.Control
                    type="input"
                    name={`rel_${selectedRelation}`}
                    placeholder={`e.g. '${relationOptions[selectedRelation].exampleParam}' →'${relationOptions[selectedRelation].exampleResult}'`}
                    onChange={handleUpdate}
                />
            }
        </Form.Group>
    </>;
}