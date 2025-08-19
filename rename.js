import fs from "fs";
import path from "path";

// 👇 Change this to the folder you want
const targetDir = path.join(process.cwd(), "src/components");

function traverseAndRename(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Go inside subfolders
      traverseAndRename(fullPath);
    } else if (entry.isFile() && fullPath.endsWith(".ts")) {
      // Rename .ts → .tsx
      const newPath = fullPath.replace(/\.ts$/, ".tsx");
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} → ${newPath}`);
    } 
  });
}

traverseAndRename(targetDir);
console.log("✅ Renaming complete in:", targetDir);
