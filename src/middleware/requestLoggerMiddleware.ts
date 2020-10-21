import { Request, Response, NextFunction } from 'express';

const requestLoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.info(req.method + req.originalUrl);
  const start = new Date().getTime();
  req.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    console.info(
      `${req.method} + ${req.originalUrl} + ${res.statusCode} ${elapsed}ms`,
    );
  });
  next();
};

export { requestLoggerMiddleware };