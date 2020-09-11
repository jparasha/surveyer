import { mount } from 'enzyme';

import Header from '../../organisms/Header';

/** @test {Header Component} */
describe('Header Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Header label="test" />);
        expect(wrapper.find('header')).toHaveLength(1);
    });
});
