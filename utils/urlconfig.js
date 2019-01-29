const baseURL = "https://sheetlabs.com/IND/";

//We will just store the configs here. We do not need to 
//type validate the param values here as GraphQL Schema 
//should do that for us

const vs = {
    path: "vs",
    params: {
        'word': "word=",
        "category": "category="
    }
}

const rv = {
    path: "rv",
    params: {
        "mandal": "mandal=",
        "sukta": "sukta=",
        "sungby": "sungby="
    }
}

module.exports = { baseURL, vs, rv }