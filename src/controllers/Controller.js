class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const result = await this.entidadeService.getAllData();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const oneData = await this.entidadeService.getById(Number(id));
      return res.status(200).json(oneData);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const novoRegistro = await this.entidadeService.createNewData(data);
      return res.status(201).json(novoRegistro);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.updateById(
        dadosAtualizados,
        Number(id),
      );
      if (!foiAtualizado) {
        return res.status(400).json({ message: "Registro não foi atualizado" });
      }
      return res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.deleteById(Number(id));
      return res.status(200).json({ message: `Id ${id} deletado` });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
