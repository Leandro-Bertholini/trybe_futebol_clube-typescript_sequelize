import * as sinon from 'sinon';
import * as chai from 'chai';
import * as mocha from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserService from '../services/UserService';
import { Token, loginFake } from './mocks/login.mock.test';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota de criação do login', () => {
  afterEach(() => { sinon.restore() });

  it('Retorna um token ao fazer login com os dados corretos', async () => {
    // @ts-ignore
    sinon.stub(UserService, 'login').resolves('token');

    const result = await chai.request(app).post('/login')
      .send(loginFake);

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal({token: 'token'});
  });
});