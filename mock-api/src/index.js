const users = require('./users.json');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const makeDescription = () =>{
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });

    return lorem.generateWords(5);
};

const randomDateTime =()=>{
    let start = new Date(2020, 10, 1);
    let end = new Date(2021, 1, 1);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

module.exports = () => {
    const data = { users, todos: [] };
    const statusType = ["completed", "postponed", "undone"];
    let now = new Date();
    let nowTime = parseInt(now.getTime()/1000);

    // Create 250 todos
    let count = 0;
    while (count < 100) {
        let description = makeDescription();
        let dueDate = randomDateTime();
        console.log(dueDate);
        let status = dueDate > now ? "undone" : statusType[Math.floor(Math.random() * 3)];
        data.todos.push({ userId: 1, id: count, description: `${description}`, status: status, dueDate: dueDate })
        count++;
    }
    console.log(data);
    return data
}
