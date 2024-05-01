import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()



const AllProducts = atom({ key: 'AllProducts', default: [], effects_UNSTABLE: [persistAtom], })
