import { mount } from 'enzyme';

import Title from '../organisms/Dashboard';

/** @test {Title Component} */
describe('Title Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Title label="test" />);
        expect(wrapper.find('header')).toHaveLength(1);
    });
});