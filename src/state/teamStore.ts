import { computed } from 'nanostores'
import { teamByUniverseStore } from './teamByUniverseStore'
import { getTeamByUniverse } from '@/lib/constants'

// export const teamStore = computed(teamByUniverseStore, () => {
//     return getTeamByUniverse()
// })