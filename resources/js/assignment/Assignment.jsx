import { useContext } from 'react';
import '/resources/scss/assignment/Assignment.scss'
import Context from '../Context';


export default function Assignment() {

    const { state, dispatch, user, setUser, getUser } = useContext(Context);
    console.log(user)

    user
        ? console.log('logged-in role is:' + user.role)
        : 'getting role...'

    return (
        <div className='assignment'>
            {
                !user && (
                    <>
                        <div>Logg-in to have access tex1</div>
                        <div>Logg-in to have access text2</div>
                    </>
                )
            }


            {
                (user && user.role === 'employee') && (
                    <>
                        <div>Employee text1</div>
                        <div>Employee text2</div>
                    </>
                )
            }

            {
                (user && user.role === 'admin') && (
                    <>
                        <div>Admin1</div>
                        <div>Admin2</div>
                    </>
                )
            }

            {
                (user && user.role === 'project-leader') && (
                    <>
                        <div>Project leader text1</div>
                        <div>Project leader text2</div>
                    </>
                )
            }

            {
                (user && user.role === 'pivision-leader') && (
                    <>
                        <div>Division leader text1</div>
                        <div>Division leader text2</div>
                    </>
                )
            }
        </div>
    );
}
