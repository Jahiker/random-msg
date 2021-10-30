const messages = [
    'oscar',
    'ana',
    'nicol',
    'yesica',
    'diego',
    'laura',
    'carolina',
    'pablo'
];

const randonMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randonMsg}; 