const meta = { auth: false }
const demo3 = {
    path: '/demo3',
    name: 'demo3',
    meta,
    component: () => import('@/page/demo3')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo3/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo3-')
}
export default demo3