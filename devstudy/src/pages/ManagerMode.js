import { useState } from "react";
import '../styles/ManagerMode.css';
import Edit from "../components/Edit";
import { useLocalStorageData } from "../constants/useLocalStorageData";
import Delete from "../components/Delete";

function ManagerMode(){
    const [activeTab,setActiveTab]=useState(0);
    const handleTabClick=(index)=>{
        setActiveTab(index);
    };
    const tabs=[
        {label:'Edit',index:0},
        {label:'Delete',index:1},
    ];
    const storageData=useLocalStorageData();

    return(
        <>
            <div className="manager-wrap">
                <div id="border-top"></div>
                <h2>Manager Mode</h2>
                <section id="content-box">
                    <article className="tab-box">
                        <div className="label-wrap">
                            {tabs.map((tab)=>(
                                <div 
                                    key={tab.index}
                                    className={`tab ${activeTab===tab.index?'active-tab':''}`}
                                    onClick={()=>handleTabClick(tab.index)}
                                >
                                    <p>{tab.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="tab-content">
                            {activeTab===0&&<Edit storageData={storageData}/>}
                            {activeTab===1&&<Delete storageData={storageData}/>}
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}

export default ManagerMode;