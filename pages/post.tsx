import type { NextPage } from 'next'
import { useState } from 'react'
import Modal from '../components/common/Modal'
import DaumPostcode from "react-daum-postcode";
import Header from "../components/common/Header";
import {SubmitHandler, useForm} from 'react-hook-form'
import {FormData} from '../interfaces/item'
import {getItem, insertItem} from  './api/item/index'

const Post: NextPage = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const openPostCode = () => { setIsPopupOpen(true) }
    const closePostCode = () => { setIsPopupOpen(false) }

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = async data => {
        let rs = await insertItem(data)
        // let rs = await getItem()
        if(rs.data.addItems){
            console.log("데이터 삽입 성공")
        }else{
            console.log("데이터 삽입 실패")
        }
    }

    return (
        <>
        <Header/>
                <div className="m-auto w-[829px]">
                    <div className="mt-[62px] font-semibold text-[24px]">매물등록</div>

                    <div className="mt-[29px] text-[14px]">매물종류<span className="text-[#FF0000]">*</span></div>

                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            원룸
                        </button>
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            투룸
                        </button>
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            쓰리룸
                        </button>
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            오피스텔
                        </button>
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            아파트
                        </button>
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            기타
                        </button>

                    </div>

                    {/*<ul className="flex text-center list-none">*/}
                    {/*    <li className="text-[#FFF] text-[13px] font-semibold w-[80px] h-[35px] bg-[#B5B5B5] rounded-l-[5px] p-[8px]">원룸</li>*/}
                    {/*    <li className="text-[#B5B5B5] text-[13px] font-semibold w-[80px] h-[35px] p-[8px] border-solid border-[1px] border-[#B5B5B5]">투룸</li>*/}
                    {/*    <li className="text-[#B5B5B5] text-[13px] font-semibold w-[80px] h-[35px] p-[8px] border-solid border-[1px] border-[#B5B5B5]">쓰리룸</li>*/}
                    {/*    <li className="text-[#B5B5B5] text-[13px] font-semibold w-[80px] h-[35px] rounded-r-[5px] p-[8px] border-solid border-[1px] border-[#B5B5B5]">아파트</li>*/}
                    {/*</ul>*/}

                    <div className="mt-[29px] text-[14px]">거래정보<span className="text-[#FF0000]">*</span></div>

                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            월세
                        </button>
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            전세
                        </button>
                        <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            매매
                        </button>
                    </div>

                    {/*<ul className="flex text-center list-none">*/}
                    {/*    <li className="text-[#FFF] w-[80px] h-[35px] bg-[#B5B5B5] rounded-l-[5px] p-[10px]">월세</li>*/}
                    {/*    <li className="w-[80px] h-[35px] p-[10px]">전세</li>*/}
                    {/*    <li className="w-[80px] h-[35px] rounded-r-[5px] p-[10px]">매매</li>*/}
                    {/*</ul>*/}

                    <div className="mt-[29px] text-[14px]">거래가격<span className="text-[#FF0000]">*</span><span className="text-[#FF0000] text-[7px]">숫자만 입력가능</span></div>
                    <input className="w-[277px] mt-[9px] h-[35px] border-solid border-1 border-[#B5B5B5] rounded-[5px] focus:outline-none"
                           {...register("price")}/>
                    {/*mobile:w-[200px] tablet:w-[700px] laptop:w-[277px] desktop:w-[277px]*/}
                    <div className="mt-[29px] text-[14px]">건물정보</div>
                    <input className="mt-[9px] w-[277px] h-[35px] border-solid border-1 border-[#B5B5B5] rounded-[5px] focus:outline-none"

                    />

                    <div className="mt-[29px] text-[14px]">위치정보</div>
                    <div className="flex mt-[9px] ">
                        <input className="w-[277px] h-[35px] border-solid border-1 border-[#B5B5B5] rounded-l-[5px] focus:outline-none"
                               {...register("addr1")}/>
                        <button className="w-[80px] h-[35px] bg-[#B5B5B5] rounded-r-[5px] border-transparent p-[10px] text-[#FFF]" type='button' onClick={openPostCode}>검색</button>
                    </div>
                    <div id='add-modal'>
                        {isPopupOpen && (
                            <Modal>
                                <AddModal onClose={closePostCode}/>
                            </Modal>
                        )}
                    </div>
                    <input className="mt-[9px] w-[641px] h-[35px] border-solid border-1 border-[#B5B5B5] rounded-[5px] focus:outline-none"/>

                    <div className="mt-[29px] text-[14px]">상세설명</div>
                    <textarea className="mt-[29px] w-[642px] h-[100px] border-solid border-1 border-[#B5B5B5] rounded-[5px] focus:outline-none"
                              {...register("contents")}/>

                    <div className="">사진등록<span>*</span></div>
                    <div>등록하기<input type="file" className=""/></div>

                    <button onClick={handleSubmit(onSubmit)}>저장하기</button>
                </div>
        </>
    )
}

export default Post

function AddModal (props:any) {
    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data:any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.onClose()
    }

    return(
        <div>
            <DaumPostcode onComplete={handlePostCode}/>
            <button type='button' onClick={() => {props.onClose()}}>닫기</button>
        </div>
    )
}