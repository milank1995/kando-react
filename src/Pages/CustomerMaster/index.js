import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Input } from '@progress/kendo-react-inputs';
import {DropDownButton, DropDownButtonItem, SplitButton, SplitButtonItem} from "@progress/kendo-react-buttons";
import products from '../../products.json';
import "../../App.css"

class CustomerMaster extends React.Component {
    render() {
        return (
            <div>
                <div className="k-p-5">
                    <div className="k-mb-5 k-d-flex k-justify-content-between">
                        <div className="w-100">
                            <Input placeholder={"Search Products..."} className="w-100" />
                        </div>
                        <div className="k-text-right k-d-flex">
                            <SplitButton text="0 - 20 of 2,000" className="k-mr-3" />
                            <DropDownButton text="Sort" icon="cog" className="k-mr-3" />
                            <DropDownButton text="Filter" icon="k-icon k-i-saturation" className="k-mr-3" />
                            <SplitButton text="Add" className="k-mr-3  primary-button" >
                                <SplitButtonItem text="Add Product" />
                                <SplitButtonItem text="Add Product Group" />
                            </SplitButton>
                        </div>
                    </div>
                    <Grid
                        data={[ ...products ]}
                    >
                        <Column
                            field={<input type="checkbox" defaultChecked={false} />}
                            cell={props => (
                                <td>
                                    <input type="checkbox" />
                                </td>
                            )}
                            width="70px"
                        />
                        <Column
                            title="Sort Order"
                            cell={props => (
                                <td>
                                    <SplitButton text={props.dataItem.sortOrder} />
                                </td>
                            )}
                            width={"140px"}
                        />
                        <Column
                            title="Image"
                            cell={props => (
                                <td>
                                    <img src={props.dataItem.image} width={"100px"} />
                                </td>
                            )}
                            width={"150px"}
                        />
                        <Column field="part" title="Part#" width={"200px"} />
                        <Column field="description" title="Description" />
                        <Column field="mfrName" title="Mfr. Name" width={"120px"} />
                        <Column field="price" title="Price" width={"100px"} />
                        <Column field="catalog" title="Catalog" width={"120px"} />
                        <Column field="enteredBy" title="Entered By" width={"140px"} />
                        <Column
                            field=""
                            title=""
                            cell={props => (
                                <td>
                                    <DropDownButton icon="k-icon k-i-more-horizontal" className="table-more-icon">
                                        <DropDownButtonItem text="Edit" />
                                        <DropDownButtonItem text="Move Up" />
                                        <DropDownButtonItem text="Move Down" />
                                        <DropDownButtonItem text="Change Group" />
                                        <DropDownButtonItem text="Remove" />
                                    </DropDownButton>
                                </td>
                            )}
                            width="90px"
                        />
                    </Grid>
                </div>
            </div>
        );
    }
}

export default CustomerMaster
