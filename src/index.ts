// validate-file.ts
import { promises as fs } from "fs";
import { fileTypeFromBuffer } from "file-type";

/**
 * Validate a file against a whitelist of allowed MIME types.
 * @param filePath Path to the file to validate.
 * @returns true if valid, false otherwise.
 */
async function validateFile(filePath: string): Promise<boolean> {
    try {
        const buffer = await fs.readFile(filePath);

        // Detect actual type from file bytes
        const type = await fileTypeFromBuffer(buffer);

        if (!type) {
            console.log(`❌ Could not determine file type: ${filePath}`);
            return false;
        }

        console.log(`🔍 Detected type: ${type.mime} (ext: ${type.ext})`);

        // Define allowed types
        const allowedTypes: string[] = ["image/jpeg", "image/png", "application/pdf"];

        if (allowedTypes.includes(type.mime)) {
            console.log(`✅ File allowed: ${filePath}`);
            return true;
        } else {
            console.log(`❌ File not allowed: ${filePath}`);
            return false;
        }
    } catch (err) {
        console.error(`⚠️ Error reading file ${filePath}:`, (err as Error).message);
        return false;
    }
}

// CLI entry point
(async () => {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error("Usage: npx ts-node validate-file.ts <path-to-file>");
        process.exit(1);
    }

    await validateFile(filePath);
})();
