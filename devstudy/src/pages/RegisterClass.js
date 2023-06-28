import datas from "../components/datas";
import '../styles/RegisterClass.css';
import { useRegisterState } from '../constants/register';

function RegisterClass(){
    const {
        subject,
        setSubject,
        title,
        setTitle,
        content,
        setContent,
        url,
        setUrl,
        handleSubmit
      } = useRegisterState();
    const filteredDatas=datas.filter(data=>data.id<=5);
    
    return(
        <>
            <div className="register-wrap">
                <article>
                    <select value={subject} onChange={e=>setSubject(e.target.value)}>
                        {filteredDatas.map(data=>(
                            <option key={data.id} value={data.title}>
                                {data.title}
                            </option>
                        ))}
                    </select>
                </article>
                <article>
                    <input id="title" type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
                </article>
                <article>
                    <textarea id="content" name="title" placeholder="Content" value={content} onChange={e=>setContent(e.target.value)}></textarea>
                </article>
                <article>
                    <input id="url" type="text" placeholder="URL" value={url} onChange={e=>setUrl(e.target.value)}/>
                </article>
                <div id="bottom">
                    <button id="submit-btn" onClick={handleSubmit}>submit</button>
                </div>
            </div>
        </>
    )
}

export default RegisterClass;