export const getAll = (req, res, next) => {
  try {
    res.json([]);
  } catch (error) {
    next(error);
  }
};

export const create = (req, res, next) => {
  try {
    res.json({});
  } catch (error) {
    next(error);
  }
};

export const update = (req, res, next) => {
  try {
    res.json({});
  } catch (error) {
    next(error);
  }
};

export const remove = (req, res, next) => {
  try {
    res.json({});
  } catch (error) {
    next(error);
  }
};