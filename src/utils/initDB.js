import { openDb, initDb } from './db.js';

// Initialize the database
const initializeDatabase = async () => {
  try {
    const db = await openDb();
    await initDb(db);
    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing the database:', error);
  } finally {
    process.exit(0); // Exit the script after initialization
  }
};

initializeDatabase();