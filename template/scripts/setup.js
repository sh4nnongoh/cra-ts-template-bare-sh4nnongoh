// Update the default package.json
const { execSync } = require("child_process");
const fs = require("fs");
const data = fs.readFileSync("package.json", { encoding: "utf8" });
const objects = JSON.parse(data);
const updatedObjects = {
  ...objects,
  scripts: {
    ...objects.scripts,
    test: "react-scripts test --coverage --watchAll",
    "test:ci": "cross-env CI=true react-scripts test",
    lint: "yarn eslint --ext .ts,.tsx src/ --fix",
    prepare: "husky install"
  },
  jest: {
    collectCoverageFrom: ["./src/**"],
    coverageThreshold: {
      global: {
        lines: 90
      }
    },
    coveragePathIgnorePatterns: [
      "reportWebVitals.ts",
      "react-app-env.d.ts",
      "index.tsx"
    ]
  }
};
console.log(updatedObjects);
fs.writeFileSync("package.json", JSON.stringify(updatedObjects, null, 2));
execSync("yarn");
execSync("rm -rf .husky");
execSync("yarn prepare");
execSync("yarn husky add .husky/pre-commit \"yarn lint\"");
execSync("yarn husky add .husky/pre-push \"yarn test:ci\"");
execSync("git reset");
execSync("git add .husky/pre-commit");
execSync("git add .husky/pre-push");
execSync("git commit -m '[Config] Enable Husky'");
