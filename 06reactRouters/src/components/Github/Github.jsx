import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/yogendradevil')
        .then((res)=>{
            return res.json();
        })
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

  return (
    <div>
      <h1 className='text-lg text-center bg-gray-700 text-white max-w-4xl m-auto'>
        Git Name: {data.name}
        <br />
        Git Followers: {data.followers}
        <br />
        Git No. of Repo's:  {data.public_repos}
      <img src={data.avatar_url} alt="git pic" className=' max-w-sm' />
      </h1>
    </div>
  )
}

export default Github
