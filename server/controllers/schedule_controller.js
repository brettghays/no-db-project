let schedule = [];
let id = 0;

module.exports = {
    create: (req,res) => {
        const {date, day, time, homeTeam, guestTeam, homeScore, guestScore, outcome} = req.body;
        schedule.push({id, date, day, time, homeTeam, guestTeam, homeScore, guestScore, outcome});
        id++;
        res.status(200).send(schedule);
    },
    read: (req,res) => {
        res.status(200).send(schedule);
    },
    update: (req,res) => {
        const {date, day, time, homeTeam, guestTeam, homeScore, guestScore, outcome} = req.body;
        const updateID = req.params.id;
        const gameIndex = schedule.findIndex(game => game.id == updateID);
        let game = schedule[gameIndex];

        schedule[gameIndex] = {
            id: updateID,
            date: date || schedule.date,
            day: day || schedule.day,
            time: time || schedule.time,
            homeTeam: homeTeam || schedule.homeTeam,
            guestTeam: guestTeam || schedule.guestTeam,
            homeScore: homeScore || schedule.homeScore,
            guestScore: guestScore || schedule.guestScore,
            outcome: outcome || schedule.outcome
        };
        
        res.status(200).send(schedule);
    },
    delete: ( req, res ) => {
        const deleteID = req.params.id;
        gameIndex = schedule.findIndex(game => game.id == deleteID);
        schedule.splice( gameIndex, 1 );
        res.status(200).send( schedule );
    }
}