import * as React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import {Checkbox, Input} from '@progress/kendo-react-inputs';
import Image from "../../Assets/crosspng.png"
import {Button} from "@progress/kendo-react-buttons";
import search from "../../Assets/search.png";
import "./drawer.scss"


const items = [
    { text: 'Inbox', icon: 'k-i-inbox', selected: true }
];


const DrawerComponent = () => {
    const [expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState(items.findIndex(x => x.selected === true));
    const handleClick = () => { setExpanded(prevState => !prevState); };
    const handleSelect = (ev) => {
        setSelectedId(ev.itemIndex);
        setExpanded(false);
    };
    const CustomItem = (props) => {
        return (
            <div className="drawer-content">
                <div className="header">
                    <h2>Column Chooser</h2>
                    <img className="k-cursor-pointer close-icon" src={Image} onClick={handleClick} />
                </div>
                <p>10 Columns selected</p>

                <div className="search-bar display-table k-d-flex k-justify-content-between w-100 k-mt-3 k-mb-3">
                    <div className="w-100 display-table-cell k-pr-10">
                        <div className="search-input k-justify-content-start">
                            <img src={search} alt="search"/>
                            <Input placeholder={"Search Columns..."} className="w-100 border-bottom-unset"/>
                        </div>
                    </div>
                </div>

                <div className="selected-column">
                    <p><b>Selected Columns</b></p>

                    {
                        [1, 2,3,4,5,6,7,8,9].map((x, index) => (
                            <div className="k-d-flex justify-content-between k-align-items-center" key={index.toString()}>
                                <p>Name of the column</p>
                                <Checkbox defaultChecked={true} />
                            </div>
                        ))
                    }
                </div>

                <div className="available-column">
                    <p><b>Available Columns</b></p>

                    {
                        [1, 2,3,4,5,6,7,8,9].map((x, index) => (
                            <div className="k-d-flex justify-content-between k-align-items-center" key={index.toString()}>
                                <p>Name of the column</p>
                                <Checkbox  />
                            </div>
                        ))
                    }
                </div>

                <div className="k-mt-5">
                    <Button className="k-mr-3" primary={true} onClick={handleClick}>Save</Button>
                    <Button onClick={handleClick}>Cancel</Button>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Drawer
                expanded={expanded}
                position={'end'}
                mode={'overlay'}
                animation={{ duration: 400 }}
                items={items.map(
                    (item, index) => ({ ...item, selected: index === selectedId }))}
                onOverlayClick={handleClick}
                item={CustomItem}
                onSelect={handleSelect}
                width={500}
            >
                <DrawerContent>
                    <div className="k-form">
                        <div className="k-form-field">
                            <button className="k-button" onClick={handleClick}>Toggle the Drawer state</button>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default DrawerComponent