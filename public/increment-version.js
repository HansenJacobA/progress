import fs from "fs-extra";

(async () => {
  try {
    const versionFilePath = "./public/version.json";
    const versionData = await fs.readJson(versionFilePath);
    versionData.version += 1;
    await fs.writeJson(versionFilePath, versionData, { spaces: 2 });
    console.log(`Version incremented to ${versionData.version}`);
  } catch (err) {
    console.error(err);
  }
})();
