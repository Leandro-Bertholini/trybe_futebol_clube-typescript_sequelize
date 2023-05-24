export default `
SELECT 
    t.team_name AS name,
    SUM(CASE 
        WHEN away_team_goals > home_team_goals THEN 3 ELSE 0 END)+
    SUM(CASE 
        WHEN away_team_goals = home_team_goals THEN 1 ELSE 0 END)
    AS totalPoints,
    COUNT(t.team_name) AS totalGames,
    SUM(CASE
            WHEN away_team_goals > home_team_goals THEN 1
            ELSE 0
        END)
        AS totalVictories,
    SUM(CASE
            WHEN away_team_goals = home_team_goals THEN 1
            ELSE 0
        END)
        AS totalDraws,
    SUM(CASE
            WHEN away_team_goals < home_team_goals THEN 1
            ELSE 0
        END)
        AS totalLosses,
    SUM(away_team_goals) AS goalsFavor,
    SUM(home_team_goals) AS goalsOwn,
    SUM(away_team_goals) - SUM(home_team_goals)
        AS goalsBalance,
ROUND(
    SUM(CASE 
    WHEN away_team_goals > home_team_goals THEN 3
    WHEN away_team_goals = home_team_goals THEN 1 ELSE 0
    END
) / ((COUNT(t.team_name) * 3)) * 100, 2
    ) AS efficiency
FROM
    TRYBE_FUTEBOL_CLUBE.matches
        INNER JOIN
    TRYBE_FUTEBOL_CLUBE.teams AS t ON away_team_id = t.id
WHERE
    in_progress = 0
GROUP BY t.team_name
ORDER BY totalPoints DESC ,
 totalVictories DESC ,
 goalsBalance DESC ,
  goalsFavor DESC ,
   goalsOwn DESC;`;

// export default homeTeamsPerformance;
