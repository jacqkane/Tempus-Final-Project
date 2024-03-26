
import { useContext } from 'react';
import '/resources/scss/assignment/Assignment.scss'
import Context from '../Context';


export default function AttendanceCalculator() {

    const { state, dispatch, user, setUser, getUser } = useContext(Context);
    console.log(user)

    user
        ? console.log('logged-in role is:' + user.role)
        : 'getting role...'



    return (
        <div className='assignment'>


            {
                (user && user.role === 'admin') && (
                    <>
                        <div>Admin1</div>
                        <div>Admin2</div>
                    </>
                )
            }

           
        </div>
    );
}