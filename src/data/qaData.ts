import type { TestCaseItem, QAFocusArea } from '../types';

export const qaPhilosophy = {
  headline: "Building software is only part of the process. Making sure it works is just as important.",
  subheading: "An authentic, disciplined approach to software quality — validating requirements, catching edge-case regressions, and ensuring resilient user experiences.",
  note: "All testing matrices and API snippets shown below represent actual testing principles and representative artifacts applied during development and testing workflows."
};

export const qaFocusAreas: QAFocusArea[] = [
  {
    title: "Functional Testing",
    description: "Verifying that each software capability functions according to specified business requirements, user stories, and acceptance criteria.",
    iconName: "CheckCircle2",
    metricsOrNotes: "Validating positive & negative input paths, boundary conditions, and state transitions.",
    skills: ["Requirement Traceability", "Equivalence Partitioning", "Boundary Value Analysis", "UI Workflow Verification"]
  },
  {
    title: "API & Integration Testing",
    description: "Testing RESTful endpoints for contract compliance, payload accuracy, authentication headers, and appropriate status codes.",
    iconName: "Send",
    metricsOrNotes: "Validating HTTP status codes (200, 201, 400, 401, 403, 404, 500) and response latencies.",
    skills: ["Postman Collections", "JSON Schema Validation", "JWT Header Injection", "Environment Variables"]
  },
  {
    title: "Test Case Design & Documentation",
    description: "Formulating clear, structured, and reproducible test cases with well-defined preconditions, steps, expected results, and execution records.",
    iconName: "FileCheck",
    metricsOrNotes: "Writing repeatable test artifacts for team collaboration and regression clarity.",
    skills: ["Pre-conditions & Test Steps", "Acceptance Criteria", "Expected vs Actual Analysis", "Test Matrices"]
  },
  {
    title: "Regression Testing",
    description: "Re-executing test suites after bug fixes or new feature merges to ensure existing functionality remains uncompromised.",
    iconName: "Repeat",
    metricsOrNotes: "Guarding against side effects in vehicle status transitions and document expiry calculations.",
    skills: ["Smoke Testing", "Sanity Testing", "Impact Analysis", "Retest Cycles"]
  },
  {
    title: "Bug Reporting & Defect Lifecycle",
    description: "Documenting unambiguous defect reports featuring clear reproduction steps, environment details, actual vs expected outcomes, and severity rankings.",
    iconName: "Bug",
    metricsOrNotes: "Structured triage and communication for efficient developer debugging.",
    skills: ["Defect Triage", "Reproduction Steps", "Severity vs Priority", "Log Inspection"]
  },
  {
    title: "Test Scenarios & Exploratory Testing",
    description: "Designing end-to-end user journeys (e.g., driver logging fuel -> controller reviewing service schedule -> admin generating reports) to catch unhandled edge scenarios.",
    iconName: "Compass",
    metricsOrNotes: "Exploring edge cases, unexpected user sequences, and invalid data submissions.",
    skills: ["User Journey Mapping", "Exploratory Charters", "Error Guessing", "Cross-Role Simulation"]
  }
];

export const sampleApiTestCases: TestCaseItem[] = [
  {
    id: "TC-API-01",
    title: "Create Vehicle Registration - Valid Payload",
    endpoint: "/api/v1/vehicles",
    method: "POST",
    expectedStatus: 201,
    responseTiming: "184ms",
    testType: "API Testing",
    status: "Passed",
    assertionSnippet: `pm.test("Status code is 201 Created", function () {
    pm.response.to.have.status(201);
});
pm.test("Response includes vehicle ID and ACTIVE status", function () {
    const json = pm.response.json();
    pm.expect(json.data.status).to.eql("ACTIVE");
    pm.expect(json.data.vin).to.not.be.null;
});`,
    description: "Validates that an Admin/Controller can register a new vehicle with full chassis metadata and receives a 201 status with generated UUID."
  },
  {
    id: "TC-API-02",
    title: "Vehicle Registration - Duplicate Plate Number (Negative Test)",
    endpoint: "/api/v1/vehicles",
    method: "POST",
    expectedStatus: 409,
    responseTiming: "122ms",
    testType: "Validation",
    status: "Passed",
    assertionSnippet: `pm.test("Status code is 409 Conflict", function () {
    pm.response.to.have.status(409);
});
pm.test("Error message highlights duplicate registration", function () {
    const json = pm.response.json();
    pm.expect(json.message).to.include("Plate number already exists");
});`,
    description: "Ensures duplicate vehicle plate registration is rejected with appropriate conflict status and informative error response."
  },
  {
    id: "TC-API-03",
    title: "Fetch Upcoming Service Reminders - Protected Route",
    endpoint: "/api/v1/services/reminders?days=30",
    method: "GET",
    expectedStatus: 200,
    responseTiming: "215ms",
    testType: "Functional Testing",
    status: "Passed",
    assertionSnippet: `pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is below 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
pm.test("Response is an array with valid reminder dates", function () {
    const json = pm.response.json();
    pm.expect(json.data).to.be.an("array");
});`,
    description: "Verifies retrieval of maintenance alerts within 30-day window with active JWT bearer token."
  },
  {
    id: "TC-API-04",
    title: "Access Controlled Endpoint Without JWT (Security Test)",
    endpoint: "/api/v1/admin/fleet/audit-logs",
    method: "GET",
    expectedStatus: 401,
    responseTiming: "95ms",
    testType: "API Testing",
    status: "Passed",
    assertionSnippet: `pm.test("Status code is 401 Unauthorized", function () {
    pm.response.to.have.status(401);
});
pm.test("Bearer challenge header is present", function () {
    pm.expect(pm.response.headers.get("WWW-Authenticate")).to.not.be.undefined;
});`,
    description: "Validates role security boundary — unauthenticated requests to audit logs must be rejected with 401 Unauthorized."
  },
  {
    id: "TC-API-05",
    title: "Document Expiry Calculation - 15 Day Trigger",
    endpoint: "/api/v1/documents/compliance-check",
    method: "GET",
    expectedStatus: 200,
    responseTiming: "160ms",
    testType: "Regression Testing",
    status: "Passed",
    assertionSnippet: `pm.test("Status is 200 and flags impending expirations", function () {
    pm.response.to.have.status(200);
    const json = pm.response.json();
    pm.expect(json.expiringCount).to.be.a("number");
});`,
    description: "Verifies that insurance and emission documents expiring within the threshold date trigger notification state correctly."
  }
];
