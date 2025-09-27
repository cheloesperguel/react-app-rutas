import { useEffect, useState } from "react";
import { useParams } from "react-router";

function UserProfile() {

    const { id } = useParams();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const userRender = users.find(user => {
            return user.id === parseInt(id);
        });

        setUser(userRender);
    }, [id]);

    const users = [
        { id: 1, name: "Juan", age: 30 },
        { id: 2, name: "María", age: 25 },
        { id: 3, name: "Pedro", age: 35 },
    ];


    return (
        <>
            <h1>Perfil de {user?.name}</h1>
            <p>Edad: {user?.age}</p>
        </>
    );
}

export default UserProfile;