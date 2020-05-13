import React from 'react';
import ReactDom from 'react-dom';

import List from './List';

describe('<List/>', () => {
    it('renders without caching', ()=> {
        const div = document.createElement('div');

        //render
        ReactDom.render(<List key={[]} header={[]} cards={[]} />, div);

        //clean 
        ReactDom.unmountComponentAtNode(div);
    });
});