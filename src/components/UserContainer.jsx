import { useNavbarContext } from '../pages/HomePage.jsx';

const UserContainer = () => {
    const { user } = useNavbarContext();

    return <div>{user.username}</div>;
};

export default UserContainer;
