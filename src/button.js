import React from 'react';

import {
    Button,
    ButtonGroup,
    DropDownButton,
    DropDownButtonItem,
    FloatingActionButton,
    SplitButton,
    SplitButtonItem,
    Toolbar,
    ToolbarItem,
    ToolbarSeparator,
    ChipList
} from '@progress/kendo-react-buttons';

class App extends React.Component {
    render() {
        return (
            <div className="example-wrapper">
                <div className="example-col">
                    <p>Button</p>
                    <Button>Default</Button>
                    <Button primary={true} >Primary</Button>
                    <Button disabled={true}>Disabled</Button>
                </div>
                <div className="example-col">
                    <p>ButtonGroup</p>
                    <ButtonGroup>
                        <Button togglable={true}>
                            Option A
                        </Button>
                        <Button togglable={true}>
                            Option B
                        </Button>
                        <Button togglable={true}>
                            Option C
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="example-col">
                    <p>DropDownButton</p>
                    <DropDownButton text="User Settings" icon="cog">
                        <DropDownButtonItem text="My Profile" />
                        <DropDownButtonItem text="Friend Requests" />
                        <DropDownButtonItem text="Account Settings" />
                        <DropDownButtonItem text="Support" />
                        <DropDownButtonItem text="Log Out" />
                    </DropDownButton>
                </div>
                <div className="example-col">
                    <DropDownButton text="Add">
                        <DropDownButtonItem text="Add Product" />
                        <DropDownButtonItem text="Add Product Group" />
                    </DropDownButton>
                </div>
                <div className="example-col">
                    <SplitButton text="Add">
                        <SplitButtonItem text="Add Product" />
                        <SplitButtonItem text="Add Product Group" />
                    </SplitButton>
                </div>
                <div className="example-col">
                    <SplitButton text="Add" icon={"k-icon k-i-more-horizontal"}>
                        <SplitButtonItem text="Add Product" />
                        <SplitButtonItem text="Add Product Group" />
                    </SplitButton>
                </div>
                <div className="example-col">
                    <p>Toolbar</p>
                    <Toolbar>
                        <ToolbarItem>
                            <ButtonGroup>
                                <Button icon="bold" title="Bold" togglable={true} />
                                <Button icon="italic" title="Italic" togglable={true} />
                                <Button icon="underline" title="Underline" togglable={true} />
                            </ButtonGroup>
                        </ToolbarItem>
                        <ToolbarSeparator />
                        <ToolbarItem>
                            <ButtonGroup>
                                <Button icon="align-left" title="Align Left" togglable={true} />
                                <Button icon="align-center" title="Align Center" togglable={true} />
                                <Button icon="align-right" title="Align Right" togglable={true} />
                                <Button icon="align-justify" title="Align Justify" togglable={true} />
                            </ButtonGroup>
                        </ToolbarItem>
                        <ToolbarSeparator />
                        <ToolbarItem>
                            <Button icon="cut" title="Cut">Cut</Button>
                        </ToolbarItem>
                        <ToolbarSeparator />
                        <ToolbarItem>
                            <Button icon="copy" title="Copy">Copy</Button>
                        </ToolbarItem>
                        <ToolbarSeparator />
                        <ToolbarItem>
                            <Button icon="paste" title="Paste">Paste</Button>
                        </ToolbarItem>
                    </Toolbar>
                    <p>Chip and ChipList</p>
                    <ChipList
                        dir="rtl"
                        selection="single"
                        data={[
                            { text: 'Berry', value: 'berry' },
                            { text: 'Apple', value: 'apple' },
                            { text: 'Kiwi', value: 'kiwi' },
                            { text: 'Banana', value: 'banana' }
                        ]}
                    />
                </div>
            </div>
        )
    }
}

export default App