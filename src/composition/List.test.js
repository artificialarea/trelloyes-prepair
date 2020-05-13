import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe('<List />', () => {
    it('renders without caching', ()=> {
        const div = document.createElement('div');

        //render
        ReactDom.render(<List />, div);

        //clean 
        ReactDom.unmountComponentAtNode(div);

    });

    it('renders UI as expected', () => {
        //test
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

