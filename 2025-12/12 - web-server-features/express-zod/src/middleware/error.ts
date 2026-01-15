import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function notFoundHandler(_req: Request, res: Response) {
  res.status(404).json({ error: "Not Found" });
}

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: "Validation error", details: err.flatten() });
  }
  const status = err.status ?? 500;
  const payload: Record<string, unknown> = { error: err.message ?? "Internal Server Error" };
  if (err.details) payload.details = err.details;
  res.status(status).json(payload);
}