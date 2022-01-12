import * as React from 'react';
import NestedList from '../NestedList';

var json = {
    list: [
        {
            id: 1,
            items: [
                {
                    id: 1,
                    icon:"assessment",
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
                    icon:"build",
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
                    icon:"dashboard",
                    name: "Dashboard",
                }
            ]
        },
    
    ]
};
export default(<NestedList uxpId='SampleNestedList-1' classes={json}></NestedList>)