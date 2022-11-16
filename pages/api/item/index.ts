import {FormData} from '../../../interfaces/item'

const local = '/api/graphql'

const insertItemQuery = (item:FormData) => `
    mutation {
      addItems(
        userNo:'7',
        name:${item.name},
        addr1:${item.address1},
        addr2:${item.address2},
        price:${item.price},
        itemType:${item.itemType},
        contents:${item.contents},
        xloc:${item.xloc},
        yloc:${item.yloc},
        useYn:"Y"
      )
    }
`

const updateItemQuery = (itemNo:number, userNo:number) => `
    mutation {
      itemsUpdateUserNo(itemNo:${itemNo}, userNo:${userNo})
    }
`

    /**
     * 결과값
     * {
     *   "data": {
     *     "itemsUpdateUserNo": true
     *   }
     * }
     *
     */

const delItemQuery = (itemNo:number, userNo:number) => `
    mutation {
      deleteitem(itemNo:${itemNo}, userNo:${userNo})
    }
`
    /**
     * 결과값
     * {
     *   "data": {
     *     "itemsUpdateUserNo": true
     *   }
     * }
     * */

const getItemQuery = `
    query{
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
    }
`

let insertItem = async (item:FormData) => {
    const res = await fetch(
        local,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query:`mutation {
                addItems(
                  userNo:6,
                  name:"매물테스트데이터",
                  addr1:"주소1",
                  addr2:"주소2",
                  price:5000,
                  itemType:"아파트",
                  contents:"테스트 매물이지요",
                  xloc:"37.5126090000",
                  yloc:"127.1027670000",
                  useYn:"Y"
                )
              }`})
        }
    )

    console.log(res,"res!!!!!!")

    return res.json();
}

let updateItem = async (itemNo:number, userNo:number) => {
    const res = await fetch(
        local,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: updateItemQuery(itemNo, userNo)
        }
    )
    return res.json();
}

let delItem = async (itemNo:number, userNo:number) => {
    const res = await fetch(
        local,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: delItemQuery(itemNo,userNo)
        }
    )
    return res.json();
}

let getItem = async () => {
    const res = await fetch(
        local,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: getItemQuery
        }
    )
    return res.json();
}

export { insertItem, updateItem, delItem, getItem }