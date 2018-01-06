let roster = [
    {id: "0", firstName:"Sydney", lastName: "Black", jerseyNumber: "1", height: "5'5", position: "F"},
    {id: "1", firstName:"Kaeli", lastName: "Bluth", jerseyNumber: "2", height: "5'6", position: "F"},
    {id: "2", firstName:"Lydia", lastName: "Boswell", jerseyNumber: "3", height: "5'5", position: "F"},
    {id: "3", firstName:"Whitnie", lastName: "Button", jerseyNumber: "4", height: "5'7", position: "F"},
    {id: "4", firstName:"Sydni", lastName: "Clem", jerseyNumber: "5", height: "5'4", position: "G"},
    {id: "5", firstName:"Alese", lastName: "Guerrero", jerseyNumber: "10", height: "5'3", position: "G"},
    {id: "6", firstName:"Alexis", lastName: "Isom", jerseyNumber: "11", height: "5'10", position: "F"},
    {id: "7", firstName:"Kamie", lastName: "Norton", jerseyNumber: "12", height: "5'4", position: "G"},
    {id: "8", firstName:"McKenna", lastName: "Olsen", jerseyNumber: "13", height: "5'3", position: "G"},
    {id: "9", firstName:"Emma", lastName: "Sorensen", jerseyNumber: "14", height: "5'6", position: "G"},
    {id: "10", firstName:"Emily", lastName: "Van Ausdal", jerseyNumber: "15", height: "5'4",positionn: "G"},
    {id: "11", firstName: "Marley", lastName: "Wassom", jerseyNumber: "20", height: "5'6", position: "F"}];
let id = 12;

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