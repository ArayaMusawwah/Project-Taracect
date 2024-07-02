declare global {
  interface Global {
    _mongoClientPromise: Promise<MongoClient>
  }
}
