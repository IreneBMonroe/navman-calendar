const users = require('./users.json');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const moment = require("moment");
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

const randomDateTime =(i)=>{
    let start = new Date(2020, 11, 20);
    let end = new Date(2020, 12, 31);
    let ranDate = new Date((start.getTime() + Math.random() * (end.getTime() - start.getTime())) + (15*60000) * i);
    return{
        date: moment(ranDate).format('YYYY-MM-DD'),
        time:  moment(ranDate).format('h:mm a')
    }
};

module.exports = () => {
    const data = { ...users, todos: [] };
    const statusType = ["completed", "postponed", "undone"];
    let now = new Date();

    // Create 250 todos
    let count = 0;
    while (count < 70) {
        let description = makeDescription();
        let dueDate = randomDateTime(count);
        let status = dueDate > now ? "undone" : statusType[Math.floor(Math.random() * 3)];
        data.todos.push({ userId: 1, id: count, description: `${description}`, status: status, dueDate: dueDate.date, time: dueDate.time });
        count++;
    }
    console.log(data);
    return data
}
