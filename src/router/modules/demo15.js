const meta = { auth: false }
const demo15 = {
    path: '/demo15',
    name: 'demo15',
    meta,
    component: () => import('@/page/demo15'),
    children: (pre => [
        { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo15/two.vue'), meta: { ...meta, title: 'sb' } },
    ])('demo15-')
}
export default demo15