import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/test-db2";

export const PORT = process.env.PORT || 0;
