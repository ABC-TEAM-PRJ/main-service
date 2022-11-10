
enum typeEnum{
    oneRoom = "oneRoom",
    twoRoom = "twoRoom",
    threeRoom = "threeRoom",
    office = "office",
    apartment = "apartment",
    etc = "etc"
}

enum typeDeal{
    monthly = "monthly",    //월세
    jeonse = "jeonse",    //전세 ( 영어로는 charter )
    trading = "trading",    //매매
}

export type FormData = {
    name: string;       //아파트 이름
    address1: string;   //주소1
    address2: string;   //주소2
    price: string;      //가격
    itemType: typeEnum;   //타입
    dealInfo: typeDeal;   //거래정보 ( db에 없어서 추가해야함 )
    contents: string;   //상세설명
    xloc: string;   //위도
    yloc: string;   //경도
};

export default FormData