export type Ventilation =
  | "Poor"
  | "Average"
  | "Good";

export type Severity =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export interface FireSpreadInput {
  room: string;
  objects: string;
  occupants: number;
  ventilation: Ventilation;
  smoke_level: number;
  fire_load: number;
  explosion_risk: number;
  escape_difficulty: number;
}

export interface FireSpreadPrediction {
  severity: Severity;
  riskScore: number;
}

interface FireSpreadDatasetRow extends FireSpreadInput {
  severity: Severity;
}

const dataset: FireSpreadDatasetRow[] = [
  {
    room: "Kitchen",
    objects: "Gas Stove,LPG Cylinder",
    occupants: 3,
    ventilation: "Poor",
    smoke_level: 25,
    fire_load: 180,
    explosion_risk: 10,
    escape_difficulty: 4,
    severity: "Critical"
  },
  {
    room: "Kitchen",
    objects: "Gas Stove,Microwave",
    occupants: 2,
    ventilation: "Good",
    smoke_level: 15,
    fire_load: 60,
    explosion_risk: 1,
    escape_difficulty: 2,
    severity: "Medium"
  },
  {
    room: "Living Room",
    objects: "Curtains",
    occupants: 0,
    ventilation: "Good",
    smoke_level: 10,
    fire_load: 14,
    explosion_risk: 1,
    escape_difficulty: 2,
    severity: "Low"
  },
  {
    room: "Bedroom",
    objects: "Laptop",
    occupants: 1,
    ventilation: "Average",
    smoke_level: 8,
    fire_load: 44,
    explosion_risk: 1,
    escape_difficulty: 2,
    severity: "Low"
  },
  {
    room: "Storage Room",
    objects: "Wooden Cabinet",
    occupants: 1,
    ventilation: "Good",
    smoke_level: 6,
    fire_load: 32,
    explosion_risk: 0,
    escape_difficulty: 1,
    severity: "Low"
  },
  {
    room: "Bedroom",
    objects: "Laptop",
    occupants: 0,
    ventilation: "Average",
    smoke_level: 12,
    fire_load: 12,
    explosion_risk: 1,
    escape_difficulty: 2,
    severity: "Low"
  },
  {
    room: "Kitchen",
    objects: "Microwave",
    occupants: 0,
    ventilation: "Good",
    smoke_level: 12,
    fire_load: 50,
    explosion_risk: 0,
    escape_difficulty: 2,
    severity: "Low"
  },
  {
    room: "Living Room",
    objects: "Curtains",
    occupants: 0,
    ventilation: "Average",
    smoke_level: 5,
    fire_load: 46,
    explosion_risk: 1,
    escape_difficulty: 2,
    severity: "Low"
  },
  {
    room: "Kitchen",
    objects: "LPG Cylinder,Wooden Cabinet",
    occupants: 4,
    ventilation: "Poor",
    smoke_level: 30,
    fire_load: 200,
    explosion_risk: 10,
    escape_difficulty: 5,
    severity: "Critical"
  },
  {
    room: "Kitchen",
    objects: "Gas Stove,Curtains",
    occupants: 2,
    ventilation: "Average",
    smoke_level: 18,
    fire_load: 110,
    explosion_risk: 4,
    escape_difficulty: 3,
    severity: "High"
  },
  {
    room: "Kitchen",
    objects: "Gas Stove,LPG Cylinder,Curtains",
    occupants: 5,
    ventilation: "Poor",
    smoke_level: 35,
    fire_load: 240,
    explosion_risk: 10,
    escape_difficulty: 6,
    severity: "Critical"
  },
  {
    room: "Bedroom",
    objects: "Bed,Curtains",
    occupants: 2,
    ventilation: "Average",
    smoke_level: 15,
    fire_load: 130,
    explosion_risk: 0,
    escape_difficulty: 3,
    severity: "High"
  },
  {
    room: "Bedroom",
    objects: "Bed,Wardrobe",
    occupants: 2,
    ventilation: "Good",
    smoke_level: 12,
    fire_load: 90,
    explosion_risk: 0,
    escape_difficulty: 2,
    severity: "Medium"
  },
  {
    room: "Bedroom",
    objects: "Bed,Curtains,Bookshelf",
    occupants: 3,
    ventilation: "Poor",
    smoke_level: 20,
    fire_load: 180,
    explosion_risk: 0,
    escape_difficulty: 4,
    severity: "High"
  },
  {
    room: "Bedroom",
    objects: "Bed",
    occupants: 1,
    ventilation: "Good",
    smoke_level: 10,
    fire_load: 70,
    explosion_risk: 0,
    escape_difficulty: 1,
    severity: "Medium"
  },
  {
    room: "Bedroom",
    objects: "Bed,Curtains,Laptop",
    occupants: 2,
    ventilation: "Average",
    smoke_level: 18,
    fire_load: 150,
    explosion_risk: 3,
    escape_difficulty: 3,
    severity: "High"
  },
  {
    room: "Living Room",
    objects: "Sofa,TV,Curtains",
    occupants: 4,
    ventilation: "Average",
    smoke_level: 20,
    fire_load: 190,
    explosion_risk: 2,
    escape_difficulty: 4,
    severity: "High"
  },
  {
    room: "Living Room",
    objects: "Sofa,Bookshelf",
    occupants: 3,
    ventilation: "Average",
    smoke_level: 18,
    fire_load: 150,
    explosion_risk: 0,
    escape_difficulty: 3,
    severity: "High"
  },
  {
    room: "Living Room",
    objects: "TV",
    occupants: 2,
    ventilation: "Good",
    smoke_level: 10,
    fire_load: 20,
    explosion_risk: 0,
    escape_difficulty: 1,
    severity: "Low"
  },
  {
    room: "Living Room",
    objects: "Sofa,Curtains,Bookshelf",
    occupants: 5,
    ventilation: "Poor",
    smoke_level: 25,
    fire_load: 240,
    explosion_risk: 0,
    escape_difficulty: 5,
    severity: "High"
  },
  {
    room: "Living Room",
    objects: "Sofa,TV,LPG Cylinder",
    occupants: 4,
    ventilation: "Poor",
    smoke_level: 28,
    fire_load: 260,
    explosion_risk: 10,
    escape_difficulty: 5,
    severity: "Critical"
  },
  {
    room: "Utility Room",
    objects: "Inverter Battery",
    occupants: 1,
    ventilation: "Poor",
    smoke_level: 15,
    fire_load: 50,
    explosion_risk: 8,
    escape_difficulty: 2,
    severity: "High"
  },
  {
    room: "Utility Room",
    objects: "Inverter Battery,Paint Cans",
    occupants: 1,
    ventilation: "Poor",
    smoke_level: 22,
    fire_load: 180,
    explosion_risk: 9,
    escape_difficulty: 3,
    severity: "Critical"
  },
  {
    room: "Utility Room",
    objects: "Electrical Panel",
    occupants: 0,
    ventilation: "Average",
    smoke_level: 15,
    fire_load: 40,
    explosion_risk: 6,
    escape_difficulty: 2,
    severity: "Medium"
  },
  {
    room: "Storage Room",
    objects: "Paint Cans,Petrol Can",
    occupants: 0,
    ventilation: "Poor",
    smoke_level: 30,
    fire_load: 300,
    explosion_risk: 10,
    escape_difficulty: 4,
    severity: "Critical"
  },
  {
    room: "Storage Room",
    objects: "Petrol Can,Paint Cans,Cardboard Boxes",
    occupants: 0,
    ventilation: "Poor",
    smoke_level: 35,
    fire_load: 350,
    explosion_risk: 10,
    escape_difficulty: 5,
    severity: "Critical"
  }
];
function calculateRiskScore(
  input: FireSpreadInput
): number {
  let score = 0;

  // Smoke contribution
  score += input.smoke_level * 0.25;

  // Fire-load contribution
  score += input.fire_load * 0.15;

  // Explosion-risk contribution
  score += input.explosion_risk * 2;

  // Escape difficulty contribution
  score += input.escape_difficulty * 4;

  // Poor ventilation increases spread risk
  if (input.ventilation === "Poor") {
    score += 15;
  } else if (input.ventilation === "Average") {
    score += 7;
  }

  // Occupancy contributes to emergency risk
  score += input.occupants * 2;

  return Math.min(
    Math.round(score),
    100
  );
}
function determineSeverity(
  riskScore: number
): Severity {
  if (riskScore >= 75) {
    return "Critical";
  }

  if (riskScore >= 50) {
    return "High";
  }

  if (riskScore >= 25) {
    return "Medium";
  }

  return "Low";
}
export function predictFireSpread(
  input: FireSpreadInput
): FireSpreadPrediction {
  const riskScore =
    calculateRiskScore(input);

  const severity =
    determineSeverity(riskScore);

  return {
    severity,
    riskScore
  };
}