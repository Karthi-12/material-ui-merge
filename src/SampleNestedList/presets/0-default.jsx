import * as React from 'react';
import SampleNestedList from '../SampleNestedList';

var json = {
    list: [
        {
            id: 1,
            items: [
                {
                    id: 1,
                    icon:"https://s3.amazonaws.com/upload.uxpin/files/1005923/987913/microworkcard-1570009607762-74346e.svg",
                    height:"28px",
                    width:"42px",
                    name: "  Micro Workcard (MWC)",
                    subitems: [
                        {
                            id: 1,
                            name: "MWC"
                        },
                        {
                            id: 2,
                            name: "MWC Worklists"
                        }
                    ]
                },
            ]
        },
        {
            id: 2,
            items: [
                {
                    id: 2,
                    icon:"https://s3.amazonaws.com/upload.uxpin/files/1005923/987913/magnify-growth-1570009607684-430c2a.svg",
                    height:"30px",
                    width:"30px",
                    name: "  Cultures",
                    subitems: [
                        {
                            id: 1,
                            name: "Inoculation"
                        },
                        {
                            id: 2,
                            name: "Culture Reading"
                        }
                    ]
                }
            ]
        }, 
        {
            id: 3,
            items: [
                {
                    id: 3,
                    icon:"https://s3.amazonaws.com/upload.uxpin/files/1005923/987913/dashboard-1570009606955-48d7ba.svg",
                    height:"28px",
                    width:"28px",
                    name: "Dashboard",
                }
            ]
        },
    
    ]
};
export default(<SampleNestedList uxpId='SampleNestedList-1' classes={json}></SampleNestedList>)