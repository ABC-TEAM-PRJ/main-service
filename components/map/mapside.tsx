import HouseImage from '../../public/img/houseImg.jpeg';
import HouseImage2 from '../../public/img/houseImg2.jpeg';
import HouseImage3 from '../../public/img/houseImg3.jpeg';

import { Tabs } from "flowbite-react";
import Image from 'next/image'


const mapside = () => {
    const mapDataArr = [{
        id:1,
        content: <div className="w-full flex-col flex growcursor-pointer">
                <div className="flex grow items-center w-full border_bottom_line p-[25px] bg-white h-[200]}">
                    <div className="bg-slate-600 border-black border-2">
                        <Image width={160} height={200} src={HouseImage}/>
                    </div>
                    <div className="grow flex w-0 pl-5 ">
                        <div>
                            <h1>[전세] 24억 1000</h1>
                            <p className='text-lg'>구로구 가산동</p>
                            <p className='leading-6'>쓰리룸, 관리비 4만<br></br>혼자살기 좋은매물 준신축급<br></br>넓은1.5룸</p>
                        </div>
                    </div>
                </div>
                <div className="flex grow items-center w-full border_bottom_line p-[25px] bg-white h-[200]}">
                    <div className="bg-slate-600 border-black border-2">
                        <Image height={200} width={160} src={HouseImage2} />
                    </div>
                    <div className="grow flex w-0 pl-5 ">
                        <div>
                            <h1>[매매] 4억 3000</h1>
                            <p className='text-lg'>구로구 가산동</p>
                            <p className='leading-6'>쓰리룸, 관리비 4만<br></br>혼자살기 좋은매물 준신축급<br></br>넓은1.5룸</p>
                        </div>
                    </div>
                </div>
                <div className="flex grow items-center w-full border_bottom_line p-[25px] bg-white h-[200]}">
                    <div className="bg-slate-600 border-black border-2">
                        <Image height={200} width={160} src={HouseImage3} />
                    </div>
                    <div className="grow flex w-0 pl-5 ">
                        <div>
                            <h1>[월세] 500/34</h1>
                            <p className='text-lg'>구로구 가산동</p>
                            <p className='leading-6'>쓰리룸, 관리비 4만<br></br>혼자살기 좋은매물 준신축급<br></br>넓은1.5룸</p>
                        </div>
                    </div>
                </div>
            </div>
        }]
    
    const mapDataArr2 = [{
        id: 2,
        content: <div className="w-full flex-col flex growcursor-pointer ">
                        <div className="flex grow items-center w-full border_bottom_line p-[25px] bg-white h-[200]}">
                            <div className="bg-slate-600 border-black border-2">
                                <img height={200} width={160} src='/img/houseImg2.jpeg' />
                            
                            </div>
                            <div className="grow flex w-0 pl-5 ">
                                <div>
                                    <h1>[매매] 4억 3000</h1>
                                    <p className='text-lg'>구로구 가산동</p>
                                    <p className='leading-6'>쓰리룸, 관리비 4만<br></br>혼자살기 좋은매물 준신축급<br></br>넓은1.5룸</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex grow items-center w-full border_bottom_line p-[25px] bg-white h-[200]}">
                            <div className="bg-slate-600 border-black border-2">
                                <img height={200} width={160} src='/img/houseImg3.jpeg' />
                            
                            </div>
                            <div className="grow flex w-0 pl-5 ">
                                <div>
                                    <h1>[전세] 2억 1000</h1>
                                    <p className='text-lg'>구로구 가산동</p>
                                    <p className='leading-6'>쓰리룸, 관리비 4만<br></br>혼자살기 좋은매물 준신축급<br></br>넓은1.5룸</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex grow items-center w-full border_bottom_line p-[25px] bg-white h-[200]}">
                            <div className="bg-slate-600 border-black border-2">
                                <img height={200} width={160} src='/img/houseImg.jpeg' />
                            </div>
                            <div className="grow flex w-0 pl-5 ">
                                <div>
                                    <h1>[월세] 500/34</h1>
                                    <p className='text-lg'>구로구 가산동</p>
                                    <p className='leading-6'>쓰리룸, 관리비 4만<br></br>혼자살기 좋은매물 준신축급<br></br>넓은1.5룸</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }]

    // const result = [
    //     {id: 1, content: mapDataArr},
    //     {id: 2, content: mapDataArr2}
    // ];

    return (
        <div className="overflow-hidden relative border-r-1 border-gray-300 h-full w-[600px] flex-initial flex flex-col">
            <Tabs.Group
                aria-label="Tabs with underline"
                style="underline"
                >
                <Tabs.Item active={true} title="서울">
                    {mapDataArr2.map((result)=>{
                        return (
                            <div key={result.id}>
                                <div>{result.content}</div>
                            </div>
                        );
                    })}
                </Tabs.Item>
                <Tabs.Item active={true} title="중랑구">
                    {mapDataArr.map((result)=>{
                        return (
                            <div key={result.id}>
                                <div>{result.content}</div>
                            </div>
                        );
                    })}
                </Tabs.Item>
                <Tabs.Item title="중구">
                    {mapDataArr2.map((result, index)=>{
                        return (
                            <div key={result.id}>
                                <div>{result.content}</div>
                            </div>
                        );
                    })}
                </Tabs.Item>
                
            </Tabs.Group>
</div>

    )
  }
  
  export default mapside
  