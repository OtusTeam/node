declare module 'express' {
  import { IncomingMessage, ServerResponse } from 'http';
  export interface Request extends IncomingMessage {
    url?: string;
    path?: string;
    method?: string;
    user?: { id: string; role?: string };
  }
  export interface Response extends ServerResponse {
    status(code: number): Response;
    json(body: unknown): Response;
  }
  export interface Application {
    get: (path: string, ...handlers: unknown[]) => void;
    listen: (port: number, callback?: () => void) => void;
  }
  export function express(): Application;
}
