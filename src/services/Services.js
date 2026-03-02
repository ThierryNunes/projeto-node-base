const dataSource = require("../database/models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllData() {
    return dataSource[this.model].findAll();
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createNewData(data) {
    return dataSource[this.model].create(data);
  }

  async updateById(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: { id: id },
      },
    );
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteById(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
