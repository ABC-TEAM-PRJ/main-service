import {FormData} from '../../../interfaces/item'
import {insertItemQuery,updateItemQuery,delItemQuery,getItemQuery} from "../../../interfaces/query";

const isProd = process.env.NODE_ENV === 'production'
const local = '/api/graphql'

let insertItem = async (item:FormData) => {
    const res = await fetch(
        local,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query: insertItemQuery(item)})
        }
    )
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
            body: JSON.stringify({query:getItemQuery})
        }
    )
    return res.json();
}

export { insertItem, updateItem, delItem, getItem }