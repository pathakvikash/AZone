import { connectToDatabase } from '../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const connection = await connectToDatabase();

  if (!connection) {
    // Handle the case when connection is undefined
    return;
  }

  const { database } = connection;
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const results = await collection
    .find({})
    .sort({ _id: -1 })
    .limit(10)
    .toArray();

  response.status(200).json(results);
}
