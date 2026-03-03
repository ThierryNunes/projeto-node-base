const Controller = require("./Controller.js");
const UserServices = require("../services/UserServices.js");

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async createUser(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Nome é obrigatório" });
    }
    if (!email) {
      return res.status(400).json({ message: "E-mail é obrigatório" });
    }
    if (!password) {
      return res.status(400).json({ message: "Senha é obrigatória" });
    }

    try {
      const result = await userServices.createNewUser({
        name,
        email,
        password,
      });
      if (result) {
        return res.status(201).json({ msg: "Usuário criado com sucesso!" });
      } else {
        return res.status(400).json({ msg: "Erro ao criar usuário" });
      }
    } catch (err) {
      if (err.statusCode !== 500) {
        return res.status(err.statusCode).json({ message: err.message });
      }
      return res.status(500).json({
        message: `Erro interno do servidor ao criar usuário: ${err.message}`,
      });
    }
  }
}

module.exports = UserController;
