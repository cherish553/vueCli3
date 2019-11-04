const meta = { auth: false }
const demo20 = {
    path: '/demo20',
    name: 'demo20',
    meta,
    component: () => import('@/page/demo20'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo20/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo20-')
}
export default demo20