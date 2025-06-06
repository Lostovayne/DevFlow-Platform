export class RequestError extends Error {
  statusCode: number;
  errors?: Record<string, string[]>;
  constructor(statusCode: number, message: string, errors?: Record<string, string[]>) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.name = "RequestError";
  }
}

export class ValidationError extends RequestError {
  constructor(fieldErrors: Record<string, string[]>) {
    const message = ValidationError.formatFieldErrors(fieldErrors);
    super(400, message, fieldErrors);
    this.name = "ValidationError";
    this.errors = fieldErrors;
  }
  static formatFieldErrors(errors: Record<string, string[]>): string {
    const formattedMessages = Object.entries(errors).map(([field, messages]) => {
      const fieldName = field.charAt(0).toUpperCase() + field.slice(1);

      if (messages[0] === "Required") {
        return `${fieldName} is required`;
      } else {
        return messages.join(" and ");
      }
    });

    return formattedMessages.join(", ");
  }
}
