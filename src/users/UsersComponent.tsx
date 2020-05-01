import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from '../models/User';
import { fetchUsers } from './duck/operations';
import { AppState } from '../models/Root';

const UsersComponent: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const usersData = useSelector<AppState, UserState>((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (usersData.loading) {
        return <h2>Loading...</h2>;
    }

    if (usersData.error) {
        return <h2>An error has occured :(</h2>;
    }

    return (
        <div className='users'>
            <h1 className='title'>Users:</h1>
            <div className='list'>
                {usersData.users.map((user) => (
                    <div key={user.id} className='user'>
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersComponent;
