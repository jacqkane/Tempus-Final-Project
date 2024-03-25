import ClientFooter from "../common/ClientFooter";
import ClientHeader from "../common/ClientHeader";
import Logout from "../homepage/Logout";
import AddUser from "./AddUser";


function ClientHomepage() {

    return ( 
        <>
        <ClientHeader />
        <AddUser />
        <Logout />
        <ClientFooter />
        </>
     );
}

export default ClientHomepage;