"use client"

const getUser = async (id) => {
    const res = await fetch(`https:reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

const usersPage = async ({ params }) => { //recibir desde el url el id del usuario

    const data = await getUser(params.id)

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center">
                        <img src={data.avatar} alt={data.email} />
                    </div>
                    <div className="card-body text-center">
                        <div>
                            <h5>{data.id} {data.first_name} {data.last_name}</h5>
                            <p>{data.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default usersPage;
