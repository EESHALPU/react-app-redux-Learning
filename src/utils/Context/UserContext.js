import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : "Md Eesha",
        email : "mdeesha@gmail.com"
    }
})

export default UserContext;