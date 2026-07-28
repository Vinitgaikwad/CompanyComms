// src/utils/factory.ts
import { createFactory } from "hono/factory";
import type { AppContext } from "../types/context";

export const factory = createFactory<AppContext>();
