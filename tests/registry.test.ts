import { AgentRegistry } from "../src/registry";

const registry = new AgentRegistry();

/* ---------------- Register Agents ---------------- */

registry.registerAgent({
  agentId: "fire-hazard-01",
  agentName: "Fire & Hazard Agent",
  agentType: "fire-hazard",
  buildingId: "building-a",
  status: "online",
  capabilities: [
    "detect_hazard",
    "assess_severity",
    "identify_location",
  ],
});

registry.registerAgent({
  agentId: "security-01",
  agentName: "Security Agent",
  agentType: "security",
  buildingId: "building-a",
  status: "online",
  capabilities: [
    "verify_incident",
    "retrieve_security_event",
    "check_access_status",
  ],
});

registry.registerAgent({
  agentId: "occupancy-01",
  agentName: "Occupancy Agent",
  agentType: "occupancy",
  buildingId: "building-b",
  status: "degraded",
  capabilities: [
    "get_occupancy",
    "identify_affected_zone",
    "identify_assistance_requirements",
  ],
});

/* ---------------- Registry Size ---------------- */

console.log("Registry Size:", registry.size());

/* ---------------- Find by ID ---------------- */

console.log("\nFire Agent:");
console.log(registry.getAgent("fire-hazard-01"));

/* ---------------- Building Search ---------------- */

console.log("\nBuilding A Agents:");
console.log(registry.getAgents("building-a"));

/* ---------------- Capability Discovery ---------------- */

console.log("\nCapability: verify_incident");
console.log(
  registry.findAgentsByCapability("verify_incident")
);

/* ---------------- Offline Test ---------------- */

registry.updateAgentStatus(
  "security-01",
  "offline"
);

console.log("\nSecurity Offline");

console.log(
  registry.findAgentsByCapability(
    "verify_incident"
  )
);

/* ---------------- Remove Agent ---------------- */

registry.removeAgent("occupancy-01");

console.log("\nRegistry Size After Remove:");
console.log(registry.size());