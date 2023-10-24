const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const books = require("./Books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      console.log(allBooks);
      break;
    case "getById":
      // Handle getById action here
      const oneBooke = await books.getById(id);
      return console.log(oneBooke)
    
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
    default:
      return console.log("unknown action")
  }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
console.log(argv)
invokeAction(argv);