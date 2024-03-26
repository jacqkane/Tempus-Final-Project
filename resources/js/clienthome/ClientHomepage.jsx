import ClientFooter from "../common/ClientFooter";
import ClientHeader from "../common/ClientHeader";
import AddUser from "./AddUser";


function ClientHomepage() {

    return ( 
        <>
        <ClientHeader />
        <AddUser />
        <ClientFooter />
        </>
     );
}

export default ClientHomepage;