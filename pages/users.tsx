import Layout from "../components/common/Layout";
import {useState, useEffect} from 'react';
import getUserList from "./api/user/userList";


export default function Users() {

  const [userList, setUserList] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);
    async function fetchData() {
        const res = await getUserList();
        console.log(res.data.items[0].itemNo);
        setUserList(res.data.items);
      }
    

    return (
      <>
              {
                userList ? userList.map((item, index) => {
                  return (
                    <ul key={index}>
                      <li>{item.itemNo}</li>
                      <li>{item.userNo}</li>
                      <li>{item.name}</li>
                      <li>{item.addr1}</li>
                      <li>{item.addr2}</li>
                      <li>{item.price}</li>
                      <li>{item.itemType}</li>
                      <li>{item.contents}</li>
                      <li>{item.xloc}</li>
                      <li>{item.yloc}</li>
                      <li>{item.useYn}</li>
                    </ul>
                    )
                }) : ''
              }
       </>
    )
    
  }

  
