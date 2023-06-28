import {useState} from "react";

export const useRegisterState=()=>{
    const [subject,setSubject]=useState('HTML/CSS');
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [url,setUrl]=useState('');
    const [isCartState,setIsCartState]=useState(false);
    
    const handleSubmit=e=>{
        e.preventDefault();
    
        if(title===''){
            alert('제목을 입력하세요.');
        }else if(content===''){
            alert('컨텐츠를 입력하세요.')
        }else if(url===''){
            alert('url을 입력하세요.')
        }else{
            const obj = {
                subject: subject,
                title: title,
                content: content,
                url: url,
                isCartState:isCartState,
            };

            localStorage.setItem(localStorage.length,JSON.stringify(obj));
    
            setSubject('Html/css');
            setTitle('');
            setContent('');
            setUrl('');
    
            if(window.confirm('동영상이 등록되었습니다. 홈 화면으로 이동하시겠습니까?')){
                window.location.href = '/';
            }
        }
    }

    return { subject, setSubject, title, setTitle, content, setContent, url, setUrl, handleSubmit };
}
