import { AnyZodObject, ZodError } from "zod";
import { RequestHandler } from "express";

/**
 * validate(schema, which = "body")
 * Ожидает схему вида { body?, params?, query? } и парсит соответствующие части запроса.
 */
export function validate(
  schema: AnyZodObject,
  which: "body" | "params" | "query" = "body"
): RequestHandler {
  return (req, _res, next) => {
    try {
      // Парсим единым объектом — схема сама проверит нужные поля
      schema.parse({ body: req.body, params: req.params, query: req.query });
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        return next({ status: 400, message: "Validation error", details: e.flatten() });
      }
      next(e);
    }
  };
}