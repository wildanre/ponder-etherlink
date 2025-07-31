import postgres from 'postgres';
import * as schema from '../../ponder.schema';

// Create the connection with fallback to hardcoded connection for testing
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set. Please set it in your environment.');
}


let client: postgres.Sql<{}> | null = null;

console.log("🔍 Database connection setup:");
console.log("  - DATABASE_URL from env:", !!process.env.DATABASE_URL);
console.log("  - Connection string exists:", !!connectionString);

try {
  console.log("✅ Initializing Supabase connection...");
  // Disable prefetch as it is not supported for "Transaction" pool mode
  client = postgres(connectionString, { prepare: false });
  console.log("✅ Supabase connection initialized successfully!");
} catch (error) {
  console.error("❌ Failed to initialize Supabase connection:", error);
}


export { client };
export * from '../../ponder.schema';
