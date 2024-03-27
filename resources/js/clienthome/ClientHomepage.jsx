import { useContext } from "react";
import Context from "../Context";
import ClientFooter from "../common/ClientFooter";
import ClientHeader from "../common/ClientHeader";
import AddUser from "./AddUser";


function ClientHomepage() {

    const { state: { user, role, currentDate, currentDateFormated }, dispatch, getUser } = useContext(Context);

    return (
        <>
            <ClientHeader />


            <AddUser />


            <ClientFooter />
        </>
    );
}

export default ClientHomepage;