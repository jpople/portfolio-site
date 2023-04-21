const relationOptions = {
    syn: {
        group: "Semantic",
        optionLabel: "Synonym of",
        exampleString: "e.g. 'meek' → 'humble'"
    },
    ant: {
        group: "Semantic",
        optionLabel: "Antonym of",
        exampleString: "e.g. 'long' → 'short'"
    },
    gen: {
        group: "Semantic",
        optionLabel: "More specific than",
        exampleString: "e.g. 'liquor' → 'gin'"
    },
    spc: {
        group: "Semantic",
        optionLabel: "Less specific than",
        exampleString: "e.g. 'oak' → 'tree'"
    },
    com: {
        group: "Semantic",
        optionLabel: "Part of",
        exampleString: "e.g. 'guitar' → 'fingerboard'"
    },
    par: {
        group: "Semantic",
        optionLabel: "Contains",
        exampleString: "e.g. 'wing' → 'bird'"
    },
    hom: {
        group: "Phonetic",
        optionLabel: "Homophone of",
        exampleString: "e.g. 'might' → 'mite'"
    },
    rhy: {
        group: "Phonetic",
        optionLabel: "Strictly rhymes with",
        exampleString: "e.g. 'edit' → 'credit'"
    },
    nry: {
        group: "Phonetic",
        optionLabel: "Loosely rhymes with",
        exampleString: "e.g. 'candid' → 'abandon'"
    },
    cns: {
        group: "Phonetic",
        optionLabel: "Same consonants as",
        exampleString: "e.g. 'sickle' → 'cycle'"
    },
    jja: {
        group: "Contextual",
        optionLabel: "Often modified by",
        exampleString: "e.g. 'loyal' → 'subjects'"
    },
    jjb: {
        group: "Contextual",
        optionLabel: "Often modifies",
        exampleString: "e.g. 'shoulders' → 'broad'"
    },
    bga: {
        group: "Contextual",
        optionLabel: "Directly follows",
        exampleString: "e.g. 'eminent' → 'domain'"
    },
    bgb: {
        group: "Contextual",
        optionLabel: "Directly precedes",
        exampleString: "e.g. 'fledged' → 'fully'"
    },
    trg: {
        group: "Contextual",
        optionLabel: "Appears in same text with",
        exampleString: "e.g. 'focaccia' → 'antipasto'"
    },
};

export default relationOptions;