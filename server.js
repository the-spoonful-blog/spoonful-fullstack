const { sequelize } = require("./server/models/index");

const app = require("./server/app.js");

const PORT = process.env.PORT || 8000;

const init = async () => {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();