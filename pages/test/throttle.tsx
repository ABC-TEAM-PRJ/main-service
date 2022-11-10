import React, {useEffect, useState} from 'react'

/**
 * throttle
 * 이벤트가 발생하고 일정 주기마다 이벤트가 발생하도록 한다
 * ex)스크롤이벤트
 * */

const Throttle = () => {
    const [page, setPage] = useState(10);
    const [books, setBook] = useState([]);
    const [throttle, setThrottle] = useState(false);

    const handleScroll = () => {
        if (throttle) return;
        if (!throttle) {
            setThrottle(true);
            setTimeout(async ()=>{
                if(page >= 50) setPage(page);
                else setPage((page) => page + 5)
                setThrottle(false)
            }, 300)
        }
    }

    useEffect(()=>{
        /**
         * 맵핑 함수의 첫 번째 인자 언더스코어(_) 는 특별한 인자가 아니라,
         * 불필요한 인자의 공간을 채우기 위한 용도입니다
         * */
        setBook(Array.from({length:page},(_,idx)=> idx +1))
    },[page])

    return(
        <>
            <div className="book" onScroll={handleScroll}>
                <div>
                    {books.map((page, idx) => (
                        <div className="page" key={idx}>
                            {page}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Throttle()