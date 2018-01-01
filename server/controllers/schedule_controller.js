let schedule = [];
let id = 0;

module.exports = {
    create: (req,res) => {
        //console.log(req.body)
        const {homeTeam, guestTeam, homeScore, guestScore, outcome} = req.body;
        schedule.push({id, homeTeam, guestTeam, homeScore, guestScore, outcome});
        id++;
        res.status(200).send(schedule);
    },
    read: (req,res) => {
        res.status(200).send(schedule);
    },
    update: (req,res) => {
        const {homeTeam, guestTeam, homeScore, guestScore, outcome} = req.body;
        const deleteID = req.params.id;
        const gameIndex = schedule.findIndex(game => game.id == deleteID);
        let game = schedule[gameIndex];

        schedule[gameIndex] = {
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