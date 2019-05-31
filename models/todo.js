const todos = [
    { todo: 'Buy a Left Back', done: false },
    { todo: 'Buy a Right Back', done: false },
    { todo: 'Buy a Defensice Midfielder', done: false }
];

module.exports = {
    getAll,
    create,
    deleteOne,
};

function deleteOne(id) {
    todos.splice(id, 1);
}

function create(todo) {
    todos.push(todo);
}


function getAll() {
    return todos;
}
