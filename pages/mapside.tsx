import HouseImage from '../public/img/houseImg.jpeg';
import Image from 'next/image'

const mapside = () => {
    return (
      <div className="overflow-hidden relative border-r-[1px] border-gray-300 h-full w-[600px] flex-initial flex flex-col">
          {/* <div className="flex-none flex p-2 items-center border-b border-gray-200 lg:border-b-0 lg:hidden ">
              <MenuIcon className="w-10 lg:hidden hover:bg-gray-300 hover:rounded-lg focus:bg-gray-300 focus:rounded-lg"/>
          </div> */}
          <div className="flex items-center border_bottom_line h-16">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2 list-none" role="presentation">
                        <a href="#" className="inline-block p-4 border-transparent text-blue-600 rounded-t-lg border-b-2 border-blue-600 active hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-selected="false" aria-controls="profile">서울</a>
                    </li>
                    <li className="mr-2 list-none" role="presentation">
                        <a href="#" className="inline-block p-4 border-transparent rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" data-tabs-target="#dashboard" type="button" role="tab" aria-selected="false" aria-controls="dashboard">중랑구</a>
                    </li>
                    <li className="mr-2 list-none" role="presentation">
                        <a href="#" className="inline-block p-4 border-transparent rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" data-tabs-target="#setting" type="button" role="tab" aria-selected="false" aria-controls="settings">중구</a>
                    </li>
                
                </ul>
            </div>     
          </div>
          <div className="w-full flex-col flex growcursor-pointer ">
            <div className="flex grow items-center w-full border_bottom_line p-[25px] bg-white h-[200]}">
                <div className="bg-slate-600 border-black border-2">
                    {/* <img height={200} width={160} src='/img/houseImg.jpeg' /> */}
                    {/* 아래 방식대로 사용해야 하는 이유: 위 방식을 사용할 경우 이미지 파일크기 약 41.3kb, 아래방식은 약 4.9kb 즉, 속도가 빨라진다. */}
                    <Image src={HouseImage} alt="Picture" width={160} height={200} />
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
                        <h1>[매매] 4억 3000</h1>
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
          
      </div>
    )
  }
  
  export default mapside
  