import Users from "@/components/Users"

const fetchUsers = async () => {
  //La primer linea es para hacer el fetch a la data, es asincrono, la repsuesta tiene que ser convertida a formato json(2linea)
  const res = await fetch('https:reqres.in/api/users')
  const data = await res.json()
  return data.data
}

const indexPage = async () => {
  const users = await fetchUsers()
  return (
    <Users users={users}/>
  );
}

export default indexPage;
