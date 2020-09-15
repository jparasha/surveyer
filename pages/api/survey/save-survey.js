import { saveToDB, responseFlow } from '../../../components/utils/dbUtils';

// read data from db
const getData = query => {
    return (saveToDB(query)
        .then(dataResponse => (dataResponse))
        .catch(err => err));
};

// update the matched ta into reponse schema
const getMatches = (match = []) => {
    if (!match || !match.length) {
        return ({});
    } else {
        const matches = {};
        match.forEach(element => matches[element.number] = matches[element.number] ? [...matches[element.number], element] : [element]);
        return matches;
    }
};

// prepare response schema
const prepareResponse = (query, data) => {
    const matches = getMatches(data);
    return ({
        query,
        length: Object.keys(matches).length,
        data: matches
    });
};

// get response
/* const getResponseData = (query, res, resolvePromise, rejectPromise) => {
    return getData(query)
        .then(response => {
            const responseData = prepareResponse(query, response);
            resolvePromise();
            getResponseFlow(res, responseData, resolvePromise, 200);
        })
        .catch(errorRes => {
            rejectPromise(errorRes);
            getResponseFlow(res, {}, null, 404);
        });
}; */


// default contact data service
export default (req, res) => {
    const date = new Date();
    console.log(`recieved req: ${date}`);
    if (req.method === 'POST') {
        const { body = {} } = req || {};
        console.log(body);
        return new Promise((resolve, reject) => {
            saveToDB(body)
                .then(data => {
                    responseFlow(200, data, res, resolve);
                })
                .catch(err => {
                    responseFlow(404, err, res, reject);
                });
        });
    }
    return (responseFlow(404, {}, res));
};
