const dataSource = require("../database/models");
const Services = require("./Services.js");
const bcrypt = require("bcryptjs");

class UserServices extends Services {
  constructor() {
    super("User");
  }

  async createNewUser({ name, email, password }) {
    try {
      const findUser = await dataSource.User.findOne({
        where: { email: email },
      });

      if (!findUser) {
        const error = new Error("Usuário com esse email já cadastrado!");
        error.statusCode = 409;
        throw error;
      }

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = await dataSource.Usuario.create({
        name: name,
        email: email,
        password: hashedPassword,
        status: true,
      });

      return newUser.toJSON();
    } catch (dbError) {
      throw dbError;
    }
  }
}

module.exports = UserServices;
