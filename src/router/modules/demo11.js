const meta = { auth: false }
const demo11 = {
    path: '/demo11',
    name: 'demo11',
    meta,
    component: () => import('@/page/demo11')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo11/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo11-')
}
export default demo11