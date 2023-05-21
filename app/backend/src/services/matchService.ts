import IStatusMessage from '../interfaces/IStatusMessage';
import MatchModel from '../database/models/MatchModel';
import TeamModel from '../database/models/TeamModel';
import { IUpdateGoals } from '../interfaces/IMatch';

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

  async updateGoals(id: number, body: IUpdateGoals) {
    const { homeTeamGoals, awayTeamGoals } = body;
    await this._matchModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return { status: 200, message: 'Updated with the new scoreboard' };
  }
}
