import { useRecoilState, useRecoilValue } from 'recoil'
import { hoursSelector, minuteState } from './atoms'

export default function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState)
  const hours = useRecoilValue(hoursSelector)

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    // +를 붙이는 이유 : minutes는 string이라, 앞에 +를 붙여서 number로 바꿔줌 ex. +"1" => 1 / number
    setMinutes(+event.currentTarget.value)
  }

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      ></input>
      <input value={hours} type="number" placeholder="Hours"></input>
    </div>
  )
}
