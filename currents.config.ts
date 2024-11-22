import { CurrentsConfig } from "@currents/playwright";

const config: CurrentsConfig = {
  recordKey: process.env.CURRENTS_RECORD_KEY ?? "",
  projectId: process.env.CURRENTS_PROJECT_ID ?? "",
  coverage: {
    projects: true,
  },
};

export default config;
