import { db } from "@/db";
import GatePage from "./gate";
import { quotesTable } from "@/db/schema";

// This tells the CDN to cache this page for 24 hours
export const revalidate = 86400;

async function getQuote(n?: number) {
  console.log("Getting quote...");
  const allQuotes = await db.select().from(quotesTable); // Only runs once per day!
  const dayOfYear = Math.floor(Date.now() / 86400000);
  return allQuotes[(dayOfYear % allQuotes.length) + (n || 0)];
}
export default async function page() {
  const quote = await getQuote(1);
  return (
    <GatePage
      quote={quote?.quote || "The soul always knows what to do to heal itself."}
      author={quote?.author || "Unknown"}
    />
  );
}
