import Image from 'next/image'
import HouseImage from '../../public/img/houseImg.jpeg';
import HouseImage2 from '../../public/img/houseImg2.jpeg';
import HouseImage3 from '../../public/img/houseImg3.jpeg';


const MapArr = 
        <div className="w-full flex-col flex growcursor-pointer">
            <div className="flex grow items-center w-full border_bottom_line p-[25px] bg-white h-[200]}">
                <div className="bg-slate-600 border-black border-2">
                    <Image width={160} height={200} src={HouseImage} />
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

      const MapArr2 =  
      <div className="w-full flex-col flex growcursor-pointer ">
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

export {MapArr,MapArr2}