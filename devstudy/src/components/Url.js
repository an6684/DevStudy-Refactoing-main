import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Url.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

function Url(){
    const location=useLocation();
    const searchParams=new URLSearchParams(location.search);
    const title=searchParams.get('title');

    let avi, index;

    for (let i = 0; i < localStorage.length; i++) {
    let theme = JSON.parse(localStorage.getItem(i))
    if (title == theme.title) {
        avi = theme
        index=i;
    }}
    console.log(avi.isCartState)
    const [isCartState, setIsCartState] = useState(avi.isCartState);
    
    useEffect(() => {
        const cartButton = document.getElementById('heart');
    
        if (isCartState) {
          // 찜 했을 경우
          cartButton.classList.add('filled'); // Add filled class
        } else {
          // 찜 해제의 경우
          cartButton.classList.remove('filled'); // Remove filled class
        }
    }, [isCartState]);

    const handleCartClick = () => {
        setIsCartState(!isCartState);
        avi.isCartState = !isCartState;
        localStorage.setItem(index, JSON.stringify(avi));
    };

    return(
        <>
            <article id="url">
                <div>
                    <embed id="main-url"
                    src={`https://www.youtube.com/embed/${avi.url}?showinfo=0&modestbranding=1&rel=0`}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplasy; clipboard-wri encrypted-media; gyroscope; picture-in-pictu web-share"
                    allowfullscreen></embed>
                </div>
            </article>
            <article id="contents">
                <div className='contents-box'>
                    <h3>{avi.title}</h3>
                    <p>{avi.content}</p>
                    <button id="heart" onClick={handleCartClick}>
                        {isCartState ? (
                        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                        ) : (
                        <FontAwesomeIcon icon={farHeart} className="heart-icon filled" />
                        )}
                    </button>
                </div>
            </article>
        </>
    )
}

export default Url;