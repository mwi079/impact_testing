import { mount } from '@vue/test-utils'
import dummyFetch from '../components/dummyFetch.vue'


describe ('Dummy Test',()=>{
    test('that method works',async ()=>{
        const wrapper=mount(dummyFetch) // mounts component
        const testMethod=wrapper.vm.forTesting; //accesses method
        expect(testMethod()).toBe(7)
    })
})