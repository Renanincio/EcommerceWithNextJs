import { execSync } from "child_process";

export function resetDatabase() {
  execSync("npx prisma migrate reset --force", {
    stdio: "inherit",
  });
}
