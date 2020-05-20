const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    // it('子组件只能是 tabs-head 和 tabs-body', (done)=>{
    //     const div = document.createElement('div')
    //     div.innerHTML = `
    //     <g-tabs selected="finance">
    //         <g-tabs-head>
    //                 <g-tabs-item name="sports">NBA</g-tabs-item>
    //                 <g-tabs-item name="finance">财经</g-tabs-item>
    //                 <g-tabs-item name="life">生活</g-tabs-item>
    //         </g-tabs-head>
    //         <g-tabs-body>
    //                 <g-tabs-pane name="sports">NBA相关资讯</g-tabs-pane>
    //                 <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
    //                 <g-tabs-pane name="life">生活相关资讯</g-tabs-pane>
    //         </g-tabs-body>
    //     </g-tabs>
    //     `
    //     let vm = new Vue({
    //         el:div
    //     })
    //     vm.$nextTick(()=>{
    //       let x = vm.$el.querySelector('tabs-item:nth-child(2)')
    //       expect(x.classList.contains('active')).to.be.true
    //         done()
    //     })
    // })
    // it('可以设置icon.', () => {
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //     propsData: {
    //         icon: 'settings'
    //     }
    //     }).$mount()
    //     const useElement = vm.$el.querySelector('use')
    //     expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    //     vm.$destroy()
    // })
})