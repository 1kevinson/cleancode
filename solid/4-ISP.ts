interface Database {
    storeData(data: any);
}

interface RemoteDatabase {
    connect(uri: string)
}

// Divide interface by specific use cases
class SQlDatabase implements RemoteDatabase, Database {
    connect(uri: string) {
        // Connecting...
    }

    storeData(data: any) {
        // Storing data...
    }
}

class inMemoryDatabase implements Database {
    storeData(data: any) {
        // Storing data...
    }
}