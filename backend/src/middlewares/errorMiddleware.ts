export const errorMiddleware = (err, req, res, next): void => {
  const statusCode = err.statusCode || 500;

  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: { message } });

  if (statusCode >= 500) {
    console.error(`[Error]: ${err.stack}`);
  }
};
