const app = require("./app");

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`🟢 Server running on http://localhost:${port}`);
  });
};

module.exports = startServer;
