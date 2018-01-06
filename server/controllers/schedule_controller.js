let schedule = [
    {id: "1",date: "11/30/17", day: "Thursday", time:"3:30PM", homeTeam: "Mapleton", guestTeam: "Salem", homeScore: "", guestScore: "", outcome: "Loss"},
    {id: "2",date: "12/4/17", day: "Monday", time:"3:30PM", homeTeam: "Salem", guestTeam: "Diamond Fork", homeScore: "", guestScore: "", outcome: "Loss"},
    {id: "3",date: "12/7/17", day: "Thursday", time:"3:30PM", homeTeam: "Payson", guestTeam: "Salem", homeScore: "", guestScore: "", outcome: "Loss"},
    {id: "4",date: "12/11/17", day: "Monday", time:"3:30PM", homeTeam: "Salem", guestTeam: "Mt. Nebo", homeScore: "", guestScore: "", outcome: "Loss"},
    {id: "5",date: "12/14/17", day: "Thursday", time:"3:30PM", homeTeam: "Salem", guestTeam: "Spanish Fork", homeScore: "", guestScore: "", outcome: "Loss"},
    {id: "6",date: "1/4/18", day: "Thursday", time:"3:30PM", homeTeam: "Springville", guestTeam: "Salem", homeScore: "", guestScore: "", outcome: "Loss"},
    {id: "7",date: "1/8/17", day: "Monday", time:"3:30PM", homeTeam: "Salem", guestTeam: "Mapleton", homeScore: "", guestScore: "", outcome: ""},
    {id: "8",date: "1/11/18", day: "Thursday", time:"3:30PM", homeTeam: "Diamond Fork", guestTeam: "Salem", homeScore: "", guestScore: "", outcome: ""},
    {id: "9",date: "1/16/18", day: "Tuesday", time:"3:30PM", homeTeam: "Salem", guestTeam: "Payson", homeScore: "", guestScore: "", outcome: ""},
    {id: "10",date: "1/18/18", day: "Thursday", time:"3:30PM", homeTeam: "Mt. Nebo", guestTeam: "Salem", homeScore: "", guestScore: "", outcome: ""},
    {id: "11",date: "1/22/18", day: "Monday", time:"3:30PM", homeTeam: "Spanish Fork", guestTeam: "Salem", homeScore: "", guestScore: "", outcome: ""},
    {id: "12",date: "1/29/18", day: "Monday", time: "3:30PM", homeTeam: "Salem", guestTeam: "Springville", homeScore: "", guestScore: "", outcome: ""}];
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

    readOne: (req,res) => {
        const {date, day, time, homeTeam, guestTeam, homeScore, guestScore, outcome} = req.body;
        const gameID = req.params.id;
        const gameIndex = schedule.findIndex(game => game.id == gameID);
        let game = schedule[gameIndex];
        res.status(200).send(game)
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