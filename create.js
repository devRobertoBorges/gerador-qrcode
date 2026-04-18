import handle from "../password/handle.js";
import chalk from "chalk";

async function createPassword(){
    const password = await handle();
    console.log(password);
}

export default createPassword;