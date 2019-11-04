const meta = { auth: false }
const demo21 = {
    path: '/demo21',
    name: 'demo21',
    meta,
    component: () => import('@/page/demo21'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo21/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo21-')
}
export default demo21