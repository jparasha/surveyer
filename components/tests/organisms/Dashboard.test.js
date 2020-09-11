import { mount } from 'enzyme';

import Dashboard from '../../organisms/Dashboard';

/** @test {Dashboard Component} */
describe('Dashboard Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Dashboard label="test" />);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});
