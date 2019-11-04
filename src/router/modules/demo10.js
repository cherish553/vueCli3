const meta = { auth: false }
const demo10 = {
    path: '/demo10',
    name: 'demo10',
    meta,
    component: () => import('@/page/demo10')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo10/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo10-')
}
export default demo10