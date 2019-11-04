const meta = { auth: false }
const demo12 = {
    path: '/demo12',
    name: 'demo12',
    meta,
    component: () => import('@/page/demo12')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo12/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo12-')
}
export default demo12