export const responseFormatter = (success: boolean, message?: string, body?: Record<string, unknown>): Response => {
  return { success, message, body };
};

export interface Response {
  success: boolean;
  message?: string;
  body?: Record<string, unknown>;
}
