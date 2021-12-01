import { TelemetryClient } from "applicationinsights";

let otherClient = new TelemetryClient("SENSITIVE_APP_INSIGHTS");
otherClient.context.tags[otherClient.context.keys.cloudRole] = "SensitiveLogger";

export default function (message: string) {
  otherClient.trackTrace({
      message: message
  });
}
