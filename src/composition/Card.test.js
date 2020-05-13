import React from 'react';
import ReactDom from 'react-dom';

import Card from './Card';

describe('<Card/>', () => {
    it('renders without caching', ()=> {
        const div = document.createElement('div');

        //render
        ReactDom.render(<Card/>, div);

        //clean 
        ReactDom.unmountComponentAtNode(div);
    });
});