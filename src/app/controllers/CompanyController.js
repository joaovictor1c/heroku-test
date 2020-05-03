import Company from '../models/Company';

class CompanyController {
  async store(req, res) {
    const companyExists = await Company.findOne({
      where: { login: req.body.login },
    });

    if (companyExists) {
      return res.status(400).json({ error: 'Login already exists' });
    }

    const {
      id,
      login,
      branch,
      phone,
      zip_code,
      address,
      number,
      complement,
      state,
      city,
      district,
    } = await Company.create(req.body);
    return res.json({
      id,
      login,
      branch,
      phone,
      zip_code,
      address,
      number,
      complement,
      state,
      city,
      district,
    });
  }

  async uptade(req, res) {
    const { login, oldPassword } = req.body;

    const company = await Company.findByPk(req.userId);

    if (login !== company.login) {
      const companyExists = await Company.findOne({
        where: { login },
      });
      if (companyExists) {
        return res.status(400).json({ error: 'Login already exists' });
      }
    }
    if (oldPassword && !(await company.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const {
      id,
      branch,
      phone,
      zip_code,
      address,
      number,
      complement,
      state,
      city,
      district,
    } = await company.update(req.body);

    return res.json({
      id,
      login,
      branch,
      phone,
      zip_code,
      address,
      number,
      complement,
      state,
      city,
      district,
    });
  }

  async index(req, res) {
    const company = await Company.findAll({
      where: { id: req.userId },
      attributes: [
        'branch',
        'phone',
        'zip_code',
        'address',
        'number',
        'complement',
        'state',
        'city',
        'district',
      ],
    });
    return res.json(company);
  }
}

export default new CompanyController();
