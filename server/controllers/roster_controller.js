let roster = [{firstName: "Brett", lastName: "Hays", jerseyNumber: 42, height: "6'2", position: "Forward"}];
let id = 0;

module.exports = {
    create: (req,res) => {
        const {firstName, lastName, jerseyNumber, height, position} = req.body;
        roster.push({id, firstName, lastName, jerseyNumber, height, position});
        id++;
        res.status(200).send(roster);
    },
    read: (req,res) => {
        res.status(200).send(roster);
    },
    update: (req,res) => {
        const {firstName, lastName, jerseyNumber, height, position} = req.body;
        const updateID = req.params.id;
        const playerIndex = roster.findIndex(player => player.id == updateID);
        let player = roster[playerIndex];

        roster[playerIndex] = {
            id: updateID,
            firstName: firstName || roster.firstName,
            lastName: lastName || roster.lastName,
            jerseyNumber: jerseyNumber || roster.jerseyNumber,
            height: height || roster.height,
            position: position || roster.position,

        };

        res.status(200).send(roster);
    },
    delete: (req,res) => {
        const deleteID = req.params.id;
        playerIndex = roster.findIndex(player => player.id == deleteID);
        roster.splice(deleteID,1);
        res.status(200).send(roster);
    }
    
}