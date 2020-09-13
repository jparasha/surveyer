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
            { 'id': userID },
            { templates: [{ $set: { formData } }] },
            { upsert: true }
        )
            .then(() => resolve())
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
                dataBase.listCollections().toArray((errd, collInfos) => {
                    console.log(collInfos, errd, 85);

                });
                // ********************* INSERT COLLECTION *********************//
                console.log('inserting collection');
                insertCollection(dataBase, userData)
                    .then(() => {
                        //
                        console.log('inserted');
                        resolve();

                    })
                    .catch(e => reject(e));
            });
        } catch (error) {
            reject(error);
        }
    });
};
