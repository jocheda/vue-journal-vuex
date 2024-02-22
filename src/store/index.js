import journal from '@/modules/dayBook/store/journal'
import { createStore } from 'vuex'

const store = createStore({
	modules: {
		journal,
	},
})

export default store
