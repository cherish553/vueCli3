const meta = { auth: false }
const demo18 = {
    path: '/demo18',
    name: 'demo18',
    meta,
    component: () => import('@/page/demo18'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo18/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo18-')
}
export default demo18