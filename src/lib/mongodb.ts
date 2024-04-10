import { MongoClient, type Document, /* ChangeStream */ } from "mongodb";

export function connectToCluster<CollectionType extends Document>(collectionName: string) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(import.meta.env.MONGODB_URI);
        mongoClient.connect();

        const db = mongoClient.db('test');
        const collection = db.collection<CollectionType>(collectionName);

        // // Set up change stream on the collection you want to monitor
        // const changeStream = collection.watch();

        // // Listen for changes
        // changeStream.on('change', async (change: ChangeStream<any>) => {
        //     console.log('Change detected:', change);

        //     // Extract necessary information from the change event
        //     const documentId = change._id;
        //     const updatedFields = change.;

        //     // Apply your business logic to determine changes needed in other documents
        //     // For example, update another document based on the change
        //     const otherCollection = database.collection('other_collection');
        //     await otherCollection.updateOne({ _id: documentId }, { $set: updatedFields });

        //     console.log('Changes applied to other document.');
        // });

        return collection
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        throw new Error(`Connection to MongoDB Atlas failed! ${error}`)
    }
}

export const collectionCharacters = connectToCluster<Character>('characters')
export const collectionTeams = connectToCluster<Team>('teams')
export const collectionUniverses = connectToCluster<Universe>('universes')
export const collectionPowers = connectToCluster<Power>('powers')