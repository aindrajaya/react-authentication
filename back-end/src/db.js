import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb+srv://jaya:Tc3YfMcSPHbv56m@jayakatwang.vw9n8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}