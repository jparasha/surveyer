import { MongoClient } from 'mongodb';

// environement data
const { MONGO_URL = '', DB_NAME = 'surveyer_db', COLLECTION_NAME = 'surveyer' } = process.env || {};

// read DB collection
const readCollection = (dataBase = DB_NAME, number = '') => {
    const finder = number ? { 'number': { $regex: `.*${number}.*` } } : {};
    console.log(finder, 10, 'finder');

    return new Promise((resolve, reject) => {
        dataBase.collection(COLLECTION_NAME).find(finder).toArray((errs, result) => {
            if (errs) {
                reject(errs);
            }
            console.log(13, typeof result, 13);
            resolve(result);
        });
    });
};

//remove complete collection
const removeCollection = dataBase => {
    return new Promise((resolve, reject) => {
        dataBase.collection(COLLECTION_NAME).deleteMany({})
            .then(deletionData => {
                console.log(25, deletionData.deletedCount, 25);
                resolve();
            })
            .catch(e => reject(e));
    });
};

//insert complete collection
const insertCollection = (dataBase, data = {}) => {
    const { data: formData = {}, userID } = data || {};
    return new Promise((resolve, reject) => {
        console.log(35, data, 35);
        dataBase.collection(COLLECTION_NAME).updateOne(
            { userID },
            { $push: { 'templates': { formData } } },
            { upsert: true }
        )
            .then(dataReturned => {
                const { modifiedCount = 0, upsertedId = null, upsertedCount = 0, matchedCount = 0 } = dataReturned || {};
                console.log(45, modifiedCount, upsertedId, upsertedCount, matchedCount, 45);
                resolve({ modifiedCount, upsertedId, upsertedCount });
            })
            .catch(e => reject(e));
    });
};

// read from DB
export const readFromDB = number => {
    return new Promise((resolve, reject) => {
        try {
            // log vars
            console.log(11, MONGO_URL, DB_NAME, COLLECTION_NAME, 11);

            // connect to db
            MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
                if (err) {
                    reject(err);
                }
                // ****************************** CALL DB **************************//
                const dataBase = db.db(DB_NAME);
                // ***************************** READ COLLECTION ****************************//
                console.log('reading collection');
                readCollection(dataBase, number)
                    .then(data => resolve(data))
                    .catch(e => reject(e));
            });
        } catch (error) {
            reject(error);
        }
    });
};

// connect to DB
export const saveToDB = userData => {
    return new Promise((resolve, reject) => {
        try {
            // log vars
            console.log(11, MONGO_URL, DB_NAME, COLLECTION_NAME, 11);

            // connect to db
            MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
                if (err) {
                    reject(err);
                }
                // ****************************** CALL DB **************************//
                const dataBase = db.db(DB_NAME);
                // ********************* INSERT COLLECTION *********************//
                console.log('inserting collection');
                insertCollection(dataBase, userData)
                    .then(insertionData => {
                        console.log('inserted');
                        resolve(insertionData);
                    })
                    .catch(e => {
                        console.log(e);
                        reject(e);
                    });
            });
        } catch (error) {
            reject(error);
        }
    });
};

export const responseFlow = (code, dbData, response, promiseHandler = null) => {

    const responseData = { code, data: {}, message: 'something went wrong..' };

    if (code && code >= 200 && code < 300) {
        const { modifiedCount = 0, upsertedId = 0, upsertedCount = 0, matchedCount = 0 } = dbData || {};
        responseData.data = { modifiedCount, upsertedId, upsertedCount, matchedCount };
        responseData.message = 'inserted data';
    }
    console.log(responseData, code, 119);
    response.statusCode = code || 500;
    response.json(responseData);
    promiseHandler && promiseHandler();
};
