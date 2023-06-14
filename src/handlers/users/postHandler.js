const createUser = require('../../controllers/users/createUser');

const postUsersHandler = async (req, res) => {
  const { name, image, description } = req.body;
  try {
    if (!name || !image || !description) {
      throw Error('Missing data');
    }
    const newUser = await createUser(name, image, description);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = postUsersHandler;