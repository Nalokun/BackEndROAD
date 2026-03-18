import { config } from "dotenv";
import DataBase from "./database/database.service.ts";
config()
async function main() {
let databaseConnect=new DataBase()
 await databaseConnect.testConnection()
 console.log("done") 
}
main()
