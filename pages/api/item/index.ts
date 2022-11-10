import {FormData} from '../../../interfaces/item'

const local = 'http://localhost:8000/graphql'

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
            body: insertItemQuery(item)
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