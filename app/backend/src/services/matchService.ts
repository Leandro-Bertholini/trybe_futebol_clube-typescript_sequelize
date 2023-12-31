import IStatusMessage from '../interfaces/IStatusMessage';
import MatchModel from '../database/models/MatchModel';
import TeamModel from '../database/models/TeamModel';
import IMatch, { IUpdateGoals } from '../interfaces/IMatch';

export default class MatchService {
  constructor(
    private _matchModel = MatchModel,
    private _teamModel = TeamModel,
  ) {}

  public async getAll(inProgress: string): Promise<IStatusMessage> {
    const matches = await this._matchModel.findAll({
      include: [
        { model: this._teamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: this._teamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    if (!matches) return { status: 500, message: 'Ops! server error' };

    if (inProgress === 'true') {
      const inProgressMatches = matches.filter((mach) => mach.inProgress === true);

      return { status: 200, data: inProgressMatches };
    }

    if (inProgress === 'false') {
      const finishedMaches = matches.filter((mach) => mach.inProgress === false);

      return { status: 200, data: finishedMaches };
    }

    return { status: 200, data: matches };
  }

  public async finalize(id: number): Promise<IStatusMessage> {
    await this._matchModel.update(
      { inProgress: false },
      { where: { id } },
    );
    return { status: 200, message: 'Finished' };
  }

  async updateGoals(id: number, body: IUpdateGoals): Promise<IStatusMessage> {
    const { homeTeamGoals, awayTeamGoals } = body;
    await this._matchModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return { status: 200, message: 'Updated with the new scoreboard' };
  }

  public async create(body: IMatch): Promise<IStatusMessage> {
    const { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals } = body;

    const homeTeam = await this._teamModel.findByPk(homeTeamId);
    const awayTeam = await this._teamModel.findByPk(awayTeamId);

    if (!homeTeam || !awayTeam) return { status: 404, message: 'There is no team with such id!' };

    const gameCreated = await this._matchModel.create(
      {
        homeTeamId,
        homeTeamGoals,
        awayTeamId,
        awayTeamGoals,
        inProgress: true,
      },
    );
    return { status: 201, data: gameCreated };
  }
}
