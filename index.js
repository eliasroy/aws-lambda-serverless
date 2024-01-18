module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "HEllo wrld!!!!!!",
        input: event,
      },
      null,
      2
    ),
  };
};
