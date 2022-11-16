export type FormData = {
    name: string;       //아파트 이름
    addr1: string;   //주소1
    addr2: string;   //주소2
    price: Number;      //가격
    itemType: string   //타입
    dealInfo: string   //거래정보 ( db에 없어서 추가해야함 )
    contents: string;   //상세설명
    xloc: string;   //위도
    yloc: string;   //경도
};