import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Url.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useLocalStorageData } from '../constants/useLocalStorageData';

function Url() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title');
  // const content = searchParams.get('content');
  const card = useLocalStorageData();
  console.log(card)
  const currentOpt=card.find(data=>title===data.title)
  console.log(currentOpt)
  const [isCartState, setIsCartState] = useState(false);
  

  useEffect(() => {
    const cartButton = document.getElementById('heart');
    if (cartButton){
      
      if (isCartState) {
        // 찜 했을 경우
        cartButton.classList.add('filled'); // Add filled class
      } else {
        // 찜 해제의 경우
        cartButton.classList.remove('filled'); // Remove filled class
      }
    }
    }, [isCartState]);

  const handleClick = () => {
    const updatedCartState = !isCartState;
    setIsCartState(updatedCartState);
    currentOpt.isCartState = updatedCartState; // currentOpt 업데이트
    localStorage.setItem(currentOpt.title, JSON.stringify(currentOpt)); // 업데이트된 currentOpt 저장
  };
  useEffect(() => {
  const currentOpt = card.find((data) => title === data.title);
  if (currentOpt) {
    setIsCartState(currentOpt.isCartState);
  } else {
    setIsCartState(false); // 초기값 설정
  }
}, [title, card]);


  return (
    <>
      {card.map((data, index) => {
        if (title === data.title) {
          return (
            <div key={index} className='avi'>
              <article id="url">
                <div>
                  <embed id="main-url"
                    src={`https://www.youtube.com/embed/${data.url}?showinfo=0&modestbranding=1&rel=0`}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplasy; clipboard-wri encrypted-media; gyroscope; picture-in-pictu web-share"
                    allowfullscreen></embed>
                </div>
              </article>
              <article id="contents">
                <div className='contents-box'>
                  <h3 className='avi-title'>{data.title}</h3>
                  <p className='avi-content'>{data.content}</p>
                  <button id="heart" onClick={handleClick}>
                    {isCartState ? (
                      <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                     ) : ( 
                      <FontAwesomeIcon icon={farHeart} className="heart-icon filled" />
                     )}
                  </button>
                </div>
              </article>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default Url;

