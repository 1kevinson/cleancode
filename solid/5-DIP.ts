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

const app = new APP(sqlDatabase);
