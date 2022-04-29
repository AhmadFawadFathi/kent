import {useState} from 'react'

export default function Button() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick} className="border border-gray-600 px-5 ">
      {count}
    </button>
  )
}
