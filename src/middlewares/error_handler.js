// eslint-disable-next-line no-unused-vars
const errorHandler = (error, request, response, next) => {
  const { status, title, detail } = error;

  response.status(status);
  response.json({
    titre: title,
    detail
  });
};

module.exports = errorHandler;
