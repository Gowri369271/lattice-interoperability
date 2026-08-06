import {
  AgentRegistry,
  MessageFactory,
  MessageRouter,
} from "../src";

const registry = new AgentRegistry();

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

const router = new MessageRouter(registry);

const securityAgent =
  registry.findAgentsByCapability(
    "verify_incident"
  )[0];
if (!securityAgent) {
  throw new Error("No Security Agent found.");
}


const message =
  MessageFactory.createRequest(
    "fire-hazard-01",
    securityAgent.agentId,
    {
      location: "Floor 4",
    }
  );

router.send(message);