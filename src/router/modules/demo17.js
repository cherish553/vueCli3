const meta = { auth: false }
const demo17 = {
    path: '/demo17',
    name: 'demo17',
    meta,
    component: () => import('@/page/demo17'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo17/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo17-')
}
export default demo17