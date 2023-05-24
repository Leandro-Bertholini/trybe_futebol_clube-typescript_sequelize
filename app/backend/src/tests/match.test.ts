import * as sinon from 'sinon';
import * as chai from 'chai';
import * as mocha from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import MatchModel from '../database/models/MatchModel';
import { allMatches } from './mocks/match.mock.test';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota Matches', () => {
  afterEach(() => { sinon.restore() });

  it('Testa o retorno de todas as partidas', async () => {
    // @ts-ignore
    sinon.stub(MatchModel, 'findAll').resolves(allMatches);

    const result = await chai.request(app).get('/matches');

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(matches);
  });
});
