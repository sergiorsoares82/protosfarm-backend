export class ApiError extends Error {
  public status_code?: number;
  constructor(message: string) {
    super(message);
  }
}

export class InternalServerError extends ApiError {
  public action: string;
  public statusCode: number;

  constructor() {
    super('Erro interno do servidor');
    this.action = 'Entre em contato com o suporte';
    this.statusCode = 500;
    this.name = 'InternalServerError';
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class ServiceError extends ApiError {
  public action: string;
  public statusCode: number;

  constructor(message: string = 'Erro de serviço') {
    super(message);
    this.action = 'Entre em contato com o suporte';
    this.statusCode = 503;
    this.name = 'ServiceError';
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
