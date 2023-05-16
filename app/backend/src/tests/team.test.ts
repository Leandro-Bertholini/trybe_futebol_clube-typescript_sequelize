import * as sinon from 'sinon';
import * as chai from 'chai';
import * as mocha from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamModel from '../database/models/TeamModel';
import { allTeams } from './mocks/team.mock.test';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota Teams', () => {
  afterEach(() => { sinon.restore() });

  it('Retorna com sucesso todos os times da tabela. Status: 200', async () => {
    sinon.stub(TeamModel, 'findAll').resolves(allTeams as TeamModel[]);

    const response = await chai.request(app).get('/teams');

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.deep.equal(allTeams);
  });

  it('Retorna com sucesso um time específico da tabela. Status: 200', async () => {
    sinon.stub(TeamModel, 'findByPk').resolves(allTeams[0] as TeamModel);

    const response = await chai.request(app).get('/teams/1');

    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(allTeams[0]);
  });
});
