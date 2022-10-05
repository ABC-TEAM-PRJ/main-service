
const mapside = () => {
    return (
      <div className="left-0 bg-white h-full justify-center w-2/5 h-screen">
          {/* <div className="flex-none flex p-2 items-center border-b border-gray-200 lg:border-b-0 lg:hidden ">
              <MenuIcon className="w-10 lg:hidden hover:bg-gray-300 hover:rounded-lg focus:bg-gray-300 focus:rounded-lg"/>
          </div> */}
          <div className="m-5">
            <a className="w-full flex justify-end mt-5">
                
                <button className="h-10 w-24 bg-main-color text-white rounded-md border-none">검색</button>
                
            </a>
            <div className="flex items-center flex-wrap justify-center">
  
              <nav className="border-y-4 border-y-gray-300 border-gray-300">
                <ul className="inline-flex">
                  <li className='m-5 w-10 list-none'>서울</li>
                  <li className='m-5 list-none'>중랑구</li>
                  <li className='m-5 w-10 list-none'>중구</li>
                  <li className='m-5 w-10 list-none'>강남</li>
                  <li className='m-5 w-10 list-none'>강북</li>
                </ul>
              </nav>
            </div>
          </div>
          
          
      </div>
    )
  }
  
  export default mapside
  