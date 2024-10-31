import { UserProvider } from "./UserContext";
const AppProvider = ({ children }) => {
    return(
        <UserProvider>{children}</UserProvider>
    )
};

export default AppProvider;
