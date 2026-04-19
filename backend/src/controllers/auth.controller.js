export const example = (req, res, next) => {
  try {
    return res.json({ message: "ok" });
  } catch (error) {
    next(error);
  }
};