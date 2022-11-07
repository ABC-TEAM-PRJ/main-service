export default async function getUserList(){
    const endpoint = await 'http://localhost:8000/graphql'
    const query = await JSON.stringify({query:`query{
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