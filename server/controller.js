module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getEmail: (req, res) => {
        const email = req.body.email;
        const newText = "Thanks for signing up! " + email;
        res.status(200).send(newText);
    },

    getAppt: (req, res) => {
        const dateTime = req.body.dateTime;
        console.log('Received Date and Time:', dateTime);
        res.status(200).send(dateTime);
    }

}