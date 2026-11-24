import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An error message that names the real failure, says what to do, and is still funny.
const message =
  "Payment failed: your card is fine; our server's security certificate expired at midnight and the one person who can renew it is on a plane. Please try again in two hours.";

const limit = 200;
if ([...message].length > limit) throw new Error(`message is ${[...message].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), message);
