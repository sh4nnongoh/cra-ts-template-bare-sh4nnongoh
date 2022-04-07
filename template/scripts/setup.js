// Update the default package.json
const { execSync } = require("child_process");
const fs = require("fs");
const data = fs.readFileSync("package.json", {encoding:"utf8"});
const objects = JSON.parse(data);
const updatedObjects = {
  ...objects,
  "scripts": {
    ...objects.scripts,
    "test": "react-scripts test --coverage --watchAll",
    "lint": "yarn eslint --ext .ts,.tsx src/ --fix",
  },
  "jest": {
    "collectCoverageFrom": ["./src/**"],
    "coverageThreshold": {
      "global": {
        "lines": 90
      }
    },
    "coveragePathIgnorePatterns": [
      "reportWebVitals.ts",
      "react-app-env.d.ts",
      "index.tsx"
    ]
  }
};
console.log(updatedObjects);
fs.writeFileSync("package.json", JSON.stringify(updatedObjects, null, 2));
execSync("yarn");
