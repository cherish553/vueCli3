const meta = { auth: false }
const demo7 = {
    path: '/demo7',
    name: 'demo7',
    meta,
    component: () => import('@/page/demo7')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo7/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo7-')
}
export default demo7