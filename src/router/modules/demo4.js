const meta = { auth: false }
const demo4 = {
    path: '/demo4',
    name: 'demo4',
    meta,
    component: () => import('@/page/demo4')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo4/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo4-')
}
export default demo4