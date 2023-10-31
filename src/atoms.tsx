import { atom, selector } from 'recoil'

export const minuteState = atom({
  key: 'minutes',
  default: 0,
})

export const hoursSelector = selector({
  key: 'hours',
  get: ({ get }) => {
    const minutes = get(minuteState)
    return minutes / 60
  },
})
