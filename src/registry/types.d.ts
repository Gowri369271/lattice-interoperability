/**
 * Represents the current availability of an agent.
 */
export type AgentStatus = "online" | "offline" | "degraded" | "unknown";
/**
 * Supported agent types in the Building Emergency Agent Network.
 */
export type AgentType = "fire-hazard" | "occupancy" | "security" | "coordinator" | "ethical-priority" | "cross-building";
/**
 * Supported capabilities advertised by agents.
 * These values must remain consistent with the LATTICE project.
 */
export type AgentCapability = "detect_hazard" | "assess_severity" | "identify_location" | "get_occupancy" | "identify_affected_zone" | "identify_assistance_requirements" | "verify_incident" | "retrieve_security_event" | "check_access_status" | "combine_assessments" | "detect_conflict" | "generate_response" | "evaluate_assistance_priority" | "evaluate_human_safety" | "identify_affected_buildings" | "prepare_notification" | "share_emergency_context";
/**
 * Metadata stored by the Agent Registry.
 */
export interface AgentRegistration {
    agentId: string;
    agentName: string;
    agentType: AgentType;
    buildingId: string;
    status: AgentStatus;
    capabilities: AgentCapability[];
}
//# sourceMappingURL=types.d.ts.map
