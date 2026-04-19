export const verifyToken = (req, res, next) => {
  try {
    // depois você implementa
    next();
  } catch (error) {
    next(error);
  }
};