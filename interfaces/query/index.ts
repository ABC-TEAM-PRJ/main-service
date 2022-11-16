import {FormData} from "../item";

const insertItemQuery = (item:FormData) => `
    mutation {
      addItems(
        userNo:7,
        name:\"${item.name}\",
        addr1:\"${item.addr1}\",
        addr2:\"${item.addr2}\",
        price:${Number(item.price)},
        itemType:\"${item.itemType}\",
        contents:\"${item.contents}\",
        xloc:\"${item.xloc}\",
        yloc:\"${item.yloc}\",
        useYn:"Y"
      )
    }
`

/**
 * 결과값
 * {
 *   "data": {
 *     "addItems": true
 *   }
 * }
 *
 */


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

export {insertItemQuery,updateItemQuery,delItemQuery,getItemQuery}