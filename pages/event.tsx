import type { NextPage } from 'next'
import Layout from '../components/common/Layout'
import { useEffect,useState } from 'react'

export default function Event() {
    // UserBoxByEmail();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
          const response = await UserBoxByEmail();

          console.log(response)
          setData(response)
        }
        fetchData();
      }, []);
 
    return (
        <>
            <div>test</div>
        </>
    )
  }

  async function UserBoxByEmail(){
    const endpoint = 'http://localhost:8000/graphql'
    const query = JSON.stringify({query:`query{
        items{
          itemNo
          userNo
          name
          addr1
          addr2
          price
          itemType
          contents
          xloc
          yloc
          useYn
        }
      }`
    })
    const res = await fetch(
      endpoint,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: query
      }
    )
    return res.json();
    //   .then(res => res.json())
    //   .then(data => console.log('data returned:', data))
  }
