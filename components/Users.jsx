"use client"
import { useRouter } from "next/navigation";

const Users = ({users}) => {

    const router = useRouter() //funcion para utilizar el navigation

    return (
        <ul className="list-group">
            {
            users.map((user) => (
                <li key={user.id}
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                 onClick={() => {
                    router.push(`/users/${user.id}`) //el push es para cambiar de pag y ahi se hace el id condicional
                 }}
                 >
                    <div>
                        <h5>{user.id} {user.first_name} {user.last_name}</h5>
                        <p>{user.email}</p>
                    </div>
                    <img src={user.avatar} alt={user.email} style={{borderRadius: "50%"}}/>
                </li>
            ))
            }
        </ul>

    )
}

export default Users;
