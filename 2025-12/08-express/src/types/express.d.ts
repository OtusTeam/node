declare global {
  namespace Express {
    interface Request {
      validated?: unknown;
      validatedParams?: unknown;
      validatedBody?: unknown;
      startTimestamp?: number;
    }
  }
}

export { };

