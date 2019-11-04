const meta = { auth: false }
const demo19 = {
    path: '/demo19',
    name: 'demo19',
    meta,
    component: () => import('@/page/demo19'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo19/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo19-')
}
export default demo19