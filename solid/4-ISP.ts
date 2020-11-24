/**
 * @INTERFACE_SEGREGATION_PRINCIPLE Many client-specific interfaces are better than one more general purpose
 *
 */

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

class InMemoryDatabase implements Database {
    storeData(data: any) {
        // Storing data...
    }
}