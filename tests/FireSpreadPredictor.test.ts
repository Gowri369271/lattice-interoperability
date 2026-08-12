import {
  predictFireSpread
} from "../src/FireSpreadPredictor";

const result = predictFireSpread({
  room: "Kitchen",
  objects: "Gas Stove,LPG Cylinder",
  occupants: 3,
  ventilation: "Poor",
  smoke_level: 25,
  fire_load: 180,
  explosion_risk: 10,
  escape_difficulty: 4
});

console.log("\n===== FIRE SPREAD PREDICTOR =====");

console.log(
  "Predicted Severity:",
  result.severity
);

console.log(
  "Risk Score:",
  result.riskScore
);

if (result.riskScore < 0 || result.riskScore > 100) {
  throw new Error(
    "Risk score must be between 0 and 100."
  );
}

console.log("\nTEST PASSED");