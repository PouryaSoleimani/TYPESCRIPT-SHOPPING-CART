import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()



export const AllProducts = atom({ key: 'AllProducts', default: [], effects_UNSTABLE: [persistAtom], })
