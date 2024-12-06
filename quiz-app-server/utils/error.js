export const throwError = ({ message, res, status = 500 }) => {
  return res.status(status).send({
    message: message || "Internal Server Error",
  });
};

export const throwNotFound = ({ entity, check, res }) => {
  if (check ?? true) {
    res.status(404).send({
      message: `${entity} Not found`,
    });
  }
};
