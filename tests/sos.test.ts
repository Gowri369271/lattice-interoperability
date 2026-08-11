import {
  SOSManager
} from "../src/sos/SOSManager";

async function testSOS() {

  console.log(
    "\n===== SOS TEST ====="
  );

  const sosManager =
    new SOSManager(3000);

  const start = Date.now();

  await sosManager.triggerSOS({
    recipient: "Emergency Contact"
  });

  const elapsed =
    Date.now() - start;

  console.log(
    "Status:",
    sosManager.getStatus()
  );

  console.log(
    "Temporary Severity:",
    sosManager.getTemporarySeverity()
  );

  console.log(
    "Elapsed:",
    elapsed,
    "ms"
  );

  if (
    sosManager.getStatus()
    !== "READY_TO_DIAL"
  ) {
    throw new Error(
      "SOS did not complete sounding."
    );
  }
  sosManager.completeSOS();

if (
  sosManager.getStatus()
  !== "COMPLETED"
) {
  throw new Error(
    "SOS did not complete correctly."
  );
}

console.log(
  "SOS completed successfully."
);

sosManager.reset();

if (
  sosManager.getStatus()
  !== "IDLE"
) {
  throw new Error(
    "SOS did not reset correctly."
  );
}

console.log(
  "SOS reset successfully."
);

  console.log(
    "\nTEST PASSED"
  );
}

testSOS().catch((error) => {
  console.error(error);
});