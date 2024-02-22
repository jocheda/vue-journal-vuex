export default {
	name: 'dayBook',
	component: () =>
		import(
			/* webpackChunkName: "dayBook" */ '@/modules/dayBook/layouts/DayBookLayout.vue'
		),
	children: [
		{
			path: '',
			name: 'noEntry',
			component: () => import('@/modules/dayBook/views/NoEntrySelected.vue'),
		},
		{
			path: ':id',
			name: 'entry',
			component: () => import('@/modules/dayBook/views/EntryView.vue'),
		},
	],
}
