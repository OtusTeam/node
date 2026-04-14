import { Elysia } from "elysia";
import { nowIso } from "../lib/time";

type ObservabilityOptions = {
  headerPrefix?: string;
};

export const observability = (opts: ObservabilityOptions = {}) => {
  const headerPrefix = opts.headerPrefix ?? "x-demo-";

  return new Elysia({ name: "plugin:observability" })
    .derive(() => ({
      requestId: crypto.randomUUID(),
      ts: nowIso(),
    }))
    .onBeforeHandle(({ requestId, set, request }) => {
      set.headers[`${headerPrefix}request-id`] = requestId;
      set.headers[`${headerPrefix}method`] = request.method;
    })
    .onAfterHandle(({ set, ts }) => {
      set.headers[`${headerPrefix}server-time`] = ts;
    });
};

