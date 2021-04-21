import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Fill() {
    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value: string) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };

    return ( <
        >
        <
        MDBTabs pills fill className = 'mb-3' >
        <
        MDBTabsItem >
        <
        MDBTabsLink onClick = {
            () => handleFillClick('tab1')
        }
        active = { fillActive === 'tab1' } >
        Link <
        /MDBTabsLink> < /
        MDBTabsItem > <
        MDBTabsItem >
        <
        MDBTabsLink onClick = {
            () => handleFillClick('tab2')
        }
        active = { fillActive === 'tab2' } >
        Very very very very long link <
        /MDBTabsLink> < /
        MDBTabsItem > <
        MDBTabsItem >
        <
        MDBTabsLink onClick = {
            () => handleFillClick('tab3')
        }
        active = { fillActive === 'tab3' } >
        Another link <
        /MDBTabsLink> < /
        MDBTabsItem > <
        /MDBTabs>

        <
        MDBTabsContent >
        <
        MDBTabsPane show = { fillActive === 'tab1' } > Tab 1 content < /MDBTabsPane> <
        MDBTabsPane show = { fillActive === 'tab2' } > Tab 2 content < /MDBTabsPane> <
        MDBTabsPane show = { fillActive === 'tab3' } > Tab 3 content < /MDBTabsPane> < /
        MDBTabsContent > <
        />
    );
}