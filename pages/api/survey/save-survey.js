import { saveToDB } from '../../../components/utils/dbUtils';
// import { getResponseFlow } from '../../Components/utils';

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
    if (req.method === 'POST') {
        console.log(req.body);
        // res.statusCode(200);
        res.send({});
    }

    const { query: { number = '' } } = req;
    const date = new Date();
    console.log(`recieved req: ${date}`);
    return new Promise((resolve, reject) => {

        // if (!number) {
        //     const responseData = prepareResponse(number, null);
        //     getResponseFlow(res, responseData, resolve, 200);
        // } else {
        //     getResponseData(number, res, resolve, reject);
        // }
    });
};
