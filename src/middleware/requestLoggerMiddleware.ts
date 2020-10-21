import { Request, Response, NextFunction } from 'express';

const requestLoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  /* tslint:disable-next-line */
  console.info(req.method + req.originalUrl);
  const start = new Date().getTime();
  req.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    /* tslint:disable-next-line */
    console.info(
      `${req.method} + ${req.originalUrl} + ${res.statusCode} ${elapsed}ms`,
    );
  });
  next();
};

export { requestLoggerMiddleware };
