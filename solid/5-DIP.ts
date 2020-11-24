/**
 * @DEPENDENCY_INVERSION_PRINCIPLE You should depend upon abstractions nor concretions
 *
 */

class APP {
    private database: Database;

    // Dependency inversion
    constructor(database: Database) {
        this.database = database;
    }

    saveSettings() {
        this.database.storeData('datas')
    }
}

const sqlDatabase = new SQlDatabase();
sqlDatabase.connect('url');

// Dependency inversion in action
const app = new APP(sqlDatabase);
