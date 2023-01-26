import React, {useState} from 'react';

// const accessToken = '9f061d26c5a8be96b17a81718959a67dd54ca9669ca41752777193f7cc5be7c3';

// component to fetch and list shots form dribble api

const API_URL = 'http://localhost:3000/users'

// const Profile = () => {
//     const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch( API_URL)
    //         .then(res => res.json())
    //         .then(data => { 
    //           setUsers(data);
    //         })
    // }, []);

    function Profile (data) {
        const [users, setUsers] = useState([])
        const [error, setError] = useState(null);
  
        return fetch(API_URL, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            throw new error('Failed to fetch data')
          }
          return response.json(setUsers)
        })
        .catch(error => {
          console.error(error)
        })
    const userData = users.data.map ((user) => {

    return (
        <div>
              <div key={data.id}>
                <img src='data.avatar_url' alt='Profile Picture'/>
                <ul>
                    <li>{data.bio}</li>
                    <li>{data.can_upload_shot}</li>
                    <li>{data.created_at}</li>
                    <li>{data.followers_count}</li>
                    <li>{data.html_url}</li>
                    <li>{data.location}</li>
                    <li>{data.login}</li>
                    <li>{data.name}</li>
                    <li>{data.email}</li>
                </ul>
              </div>
            
        </div>
    )
})

}


export default Profile


{/* <div className="dribble-shots">
{users.map(user => (
    <div className="shot" key={user.id}>
        <img src={user.images.hidpi} alt={user.title}/>
        <button onClick={Profile}>view profile</button>
    </div>
))}
</div> */}