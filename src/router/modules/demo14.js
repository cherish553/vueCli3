const meta = { auth: false }
const demo14 = {
    path: '/demo14',
    name: 'demo14',
    meta,
    component: () => import('@/page/demo14')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo14/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo14-')
}
export default demo14