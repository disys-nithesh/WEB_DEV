const toDoList = [];
while (true) {
    let query = (prompt("what do you wanna do?")).toLowerCase();
    if (query === "quit") break;
    if (query === "new") {
        toDoList.push(prompt("Enter your toDo"));
        break;
    }
    else if (query === "delete") {
        toDoList.splice(parseInt(prompt("enter the index to delete")), 1);
        break;
    }
    else if (query === "list") {
        console.log("********************");
        for (let toDo of toDoList) {
            console.log(toDo);
        }
        console.log("********************");
        break;

    }

}
