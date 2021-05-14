import React, {useEffect, useState} from "react";
import {Window, WindowActionsBar} from "@progress/kendo-react-dialogs";
import "./AdvancSearch2.scss"
import Sidebar from "./Component/Sidebar";
import Content from "./Component/RightContent";


const AdvancSearch2 = () =>{
    const [showModel, setModel] = useState(false);
    useEffect(() => {
        setModel(true);
    }, []);

    const onChange = (e) => {
        setModel({layout: e.target.value});
    };
    const toggleDialog = () => {
        setModel(!setModel);
    };

    return(
        <div className="main">

            {showModel &&
            <Window title={"Advance Search"} onClose={toggleDialog} initialHeight={515} initialWidth={1502}>
                <div className="example-config">
                        <div className="side-bar">

                            <Sidebar/>
                        </div>
                        <div className="right-side-box">
                            <Content/>
                        </div>

                    </div>
                    <div className="rightcontent"> </div>
                    <WindowActionsBar layout={showModel.layout} initialHeight={515} initialWidth={1502}>
                        <button type="button" className="k-button" onClick={toggleDialog}>Cancel</button>
                        <button type="button" className="k-button k-primary1" onClick={toggleDialog}>Apply</button>
                    </WindowActionsBar>
            </Window>}
        </div>

    )
};

export default AdvancSearch2;