import React, {useState, useEffect, useRef} from 'react'
// import Tilt from 'react-vanilla-tilt'

const allItems = [
  {id: 1, value: 'apple'},
  {id: 2, value: 'orange'},
  {id: 3, value: 'pear'},
  {id: 4, value: 'grape'},
]

export default function App() {
  const [items, setItems] = useState(allItems)
  const addItem = () => {
    setItems([...items, allItems.find(i => !items.includes(i))])
  }
  return (
    <div>
      <button
        onClick={addItem}
        className="border border-gray-500 px-2 rounded-lg mt-2 ml-2 hover:bg-gray-200 duration-100"
      >
        Add items
      </button>
      <ul>
        {items.map(item => {
          <li>
            <button className='border border-gray-500'>remove</button>
            <label htmlFor={items.value}></label>
          </li>
        })}
      </ul>
    </div>
  )
}

// function Bomb() {
//   throw new Error('CABOOM')
// }

// export default function App() {
//   const [explode, setExplode] = useState(false)
//   return (
//     <div className='mt-3 ml-3 mb-2'>
//       <button
//         onClick={() => {
//           setExplode(true)
//         }}
//         className="border border-gray-500 px-3 rounded-sm"
//       >
//         BOM
//       </button>
//       <div className="text-xl ">
//         {explode ? <Bomb /> : 'Push the button Max'}
//       </div>
//     </div>
//   )
// }

// function Com(prop) {
//   return <h1>Hellow {prop.name}</h1>
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// export default function App() {
//   return <Welcome name="Fawad" />
// }

// function Bomb() {
//   throw new Error('CABOOM')
// }

// export default function App() {
//   const [Explode, setExplode] = useState(false)
//   return (
//     <div>
//       <button
//         className="border border-gray-400 mt-2 ml-2 px-3 hover:bg-gray-200"
//         onClick={() => setExplode(true)}
//       >
//         Bomb
//       </button>
//       <div className="ml-2 mt-1 text-xl">
//         {Explode ? <Bomb /> : 'Push the button Max'}
//       </div>
//     </div>
//   )
// }

// export default function App() {
//   const [userName, setUserName] = useState('')
//   const isLowerCase = userName === userName.toLowerCase()
//   const error = isLowerCase ? null : 'user name must be lower case'

//   const handleSubmit = event => {
//     event.preventDefault()
//     alert(`entered name ${userName}`)
//   }
//   const handleChange = event => {
//     setUserName(event.target.value.toLowerCase())
//   }
//   return (
//     <form onSubmit={handleSubmit} className="mt-3 ml-3">
//       <div>
//         <label htmlFor="name">Type your name:</label>
//         <input
//           id="name"
//           className="border border-gray-500 ml-2 pl-1 mb-2"
//           autoComplete="off"
//           onChange={handleChange}
//         ></input>
//       </div>
//       <div className="text-red-600 text-xl">{error}</div>
//       <button
//         disabled={Boolean(error)}
//         className="border border-gray-500 px-3"
//         type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   )
// }

// export default function App() {
//   const [userName, setUserName] = useState('')
//   const isLowerCase = userName === userName.toLowerCase()
//   const error = isLowerCase ? null : 'user name must be lower case'

//   const handleSubmit = event => {
//     event.preventDefault()
//     alert(`entered name ${userName}`)
//   }

//   const handleChange = event => {
//     setUserName(event.target.value)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="mt-3 ml-3">
//       <div>
//         <label htmlFor="showName">Type your Name: </label>
//         <input
//           className="border border-gray-500 pl-1"
//           id="showName"
//           onChange={handleChange}
//         ></input>
//       </div>
//       <div className="text-red-600">{error}</div>
//       <button
//         disabled={Boolean(error)}
//         className="border border-gray-500 px-4 mt-3"
//       >
//         Submit
//       </button>
//     </form>
//   )
// }

// export default function App() {
//   const handleSubmit = event => {
//     event.preventDefault()
//     const bom = event.target.elements.typename.value
//     alert(`You entered ${bom}`)
//   }
//   return (
//     <form onSubmit={handleSubmit} className="mt-3 ml-3">
//       <div>
//         <label htmlFor="typename">Type your name:</label>
//         <input className="border border-gray-400 pl-1" id="typename"></input>
//       </div>
//       <button className="px-4 rounded-sm border border-gray-400 mt-3">
//         Submit
//       </button>
//     </form>
//   )
// }

// export default function App() {
//   const userNameInputRef = useRef()
//   const handleSubmit = event => {
//     event.preventDefault(event)

//     // const userName = event.target[0].value
//     // console.dir(document)
//     // const userName = event.target.elements.usenameinput.value
//     const userName = userNameInputRef.current.value
//     alert(`You entered ${userName}`)
//   }
//   return (
//     <form onSubmit={handleSubmit} className="mt-2 ml-2">
//       <div>
//         <label htmlFor="usenameinput">Username:</label>
//         <input
//           ref={userNameInputRef}
//           id="usenameinput"
//           className="border border-gray-400 pl-2 ml-2"
//         ></input>
//       </div>
//       <button type="submit" className="border border-gray-400 px-4 mt-3">
//         Submit
//       </button>
//     </form>
//   )
// }

// ***************************************************************
// function Child() {
//   console.log('%c     Child: render start', 'color: green')

//   const [count, setCount] = useState(() => {
//     console.log('%c    Child: useState Callback', 'color: red')
//     return 0
//   })

//   React.useEffect(() => {
//     console.log('%c    Child: useEffect no deps', 'color: orange')
//     return console.log(
//       '%c    Child: useEffect no deps cleanup',
//       'color: orange',
//     )
//   })

//   React.useEffect(() => {
//     console.log('%c    Child: useEffect empty deps', 'color: blue')
//     return () => {
//       console.log('%c    Child: useEffect empty deps cleanup', 'color: blue')
//     }
//   }, [])

//   React.useEffect(() => {
//     console.log('%c    Child: useEffect with deps', 'color: pink')
//     return () => {
//       console.log('%c    Child: useEffect with deps cleanup', 'color: pink')
//     }
//   }, [count])

//   const handleClick = () => {
//     setCount(count + 1)
//   }

//   console.log('%c    Child: render end', 'color: green')
//   return (
//     <div className="border border-black ml-2 mt-2 rounded-sm w-[5rem] h-[4.5rem] flex justify-center items-center">
//       <button
//         onClick={handleClick}
//         className="px-3 border border-black rounded-sm"
//       >
//         {count}
//       </button>
//     </div>
//   )
// }
// ******************************************************************************
// export default function App() {
//   console.log('%cApp: render start', 'color: green')

//   const [showChild, setShowChild] = useState(() => {
//     console.log('%cApp: useState callback', 'color: red')
//     return false
//   })

//   React.useEffect(() => {
//     console.log('%cApp: useEffect no deps', 'color: orange')
//     return console.log('%cApp: useEffect no deps cleanup', 'color: orange')
//   })

//   React.useEffect(() => {
//     console.log('%cApp: useEffect empty deps', 'color: blue')
//     return console.log('%cApp: useEffect empty deps cleanup', 'color: pink')
//   }, [])

//   React.useEffect(() => {
//     console.log('%cApp: useEffect with deps', 'color: blue')
//     return console.log('%cApp: useEffect with deps cleanup', 'color: pink')
//   }, [showChild])

//   console.log('%c    App: render end', 'color: green')

//   return (
//     <div>
//       <div>
//         <input
//           className="ml-2 mr-1"
//           id="show"
//           type="checkbox"
//           checked={showChild}
//           onChange={e => setShowChild(e.target.checked)}
//         />
//         <label htmlFor="show">Show child</label>
//       </div>
//       {showChild ? <Child /> : null}
//     </div>
//   )
// }

// function Child() {
//   const [count, setCount] = useState(0)

//   const Count = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div className="border border-gray-700 w-[5rem] h-[4.5rem] ml-2 mt-2 flex justify-center items-center rounded-sm">
//       <button
//         onClick={Count}
//         className="border border-gray-500 px-3 h-[1.5rem] rounded-sm"
//       >
//         {count}
//       </button>
//     </div>
//   )
// }

// export default function App() {
//   const [showChild, setShowChild] = useState(true)

//   return (
//     <div>
//       <div>
//         <input
//           checked={showChild}
//           id="show"
//           className="ml-2 mr-2"
//           type="checkbox"
//           onChange={e => setShowChild(e.target.checked)}
//         ></input>
//         <label htmlFor="show">Show child</label>
//       </div>
//       {showChild ? <Child /> : null}
//     </div>
//   )
// }

// export default function App() {
//   return (
//     <div className="mt-4 ml-4">
//       <button className="border border-gray-500 px-5">+</button>
//       <span className="mx-3">0</span>
//       <button className="border border-gray-500 px-5">-</button>
//     </div>
//   )
// }

// export default function App() {
//   const tiltRef = useRef()

//   React.useEffect(() => {
//     const tiltNode = tiltRef.current
//     const vanillaTiltOptions = {
//       max: 25,
//       speed: 400,
//       glare: true,
//       'max-glare': 0.5,
//     }

//     Tilt.init(tiltNode, vanillaTiltOptions)
//   })

//   return (
//     <div>
//       <div className="flex items-center mt-4 ">
//         <input id="show" type="checkbox" className="ml-6 mr-2"></input>
//         <label htmlFor="show">Show tilt</label>
//       </div>
//       <div className="border flex justify-center border-gray-400 rounded-xl mt-2 py-[2rem] w-[15rem] ml-5 bg-gradient-to-r from-sky-500 to-indigo-500">
//         <div className=" bg-gray-100 flex justify-center items-center text-gray-700 text-xl border border-gray-400 w-[11rem] h-[5.5rem] rounded-xl">
//           <strong>react-vanilla-tilt</strong>
//         </div>
//       </div>
//     </div>
//   )
// }

// / import React from 'react'
// import Button from './Button'

// function useLocalStorgeState(key, defaultValue = '') {
//   const [state, setState] = useState(() => {
//     return window.localStorage.getItem(key) || ''
//   })

//   React.useEffect(() => {
//     window.localStorage.setItem(key, state)
//   })
//   return [state, setState]
// }

// export default function App() {
//   const [name, setName] = useLocalStorgeState('name')

//   const handleChange = event => {
//     setName(event.target.value)
//   }

//   return (
//     <div className="mt-5 ml-5">
//       <form className="mt-4">
//         <label className="text-red-600 font-semibold" htmlFor="name">
//           Name:{' '}
//         </label>
//         <input
//           className="border border-red-400 pl-2 mb-2 focus:outline-none"
//           onChange={handleChange}
//           id="name"
//           autoComplete="off"
//           value={name}
//         ></input>
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// export default function App() {
//   const [count, setCount] = useState(0)
//   const handleClick = () => {
//     setCount(count + 1)
//   }
//   return (
//     <button
//       onClick={handleClick}
//       className="border border-gray-700 px-5 mt-3 ml-3"
//     >
//       {count}
//     </button>
//   )
// }

// export default function App() {
//   const [resourceType, setResourceType] = useState('posts')
//   const [items, setItems] = useState([])

//   React.useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   }, [resourceType])

//   return (
//     <div className="mt-1 ml-1">
//       <button
//         onClick={() => setResourceType('posts')}
//         className="border border-gray-600 px-4  bg-gray-200 rounded-lg"
//       >
//         Posts
//       </button>
//       <button
//         onClick={() => setResourceType('users')}
//         className="border border-gray-600 px-4 ml-1 bg-gray-200  rounded-lg"
//       >
//         Users
//       </button>
//       <button
//         onClick={() => setResourceType('comments')}
//         className="border border-gray-600 px-4 ml-1 bg-gray-200  rounded-lg"
//       >
//         Comments
//       </button>
//       <h2 className="text-2xl mt-2">{resourceType}</h2>
//       {items.map(item => {
//         return <pre>{JSON.stringify(item)}</pre>
//       })}
//     </div>
//   )
// }

// function useLocalStorgeState(key, defaultValue = '') {
//   const [name, setName] = useState(window.localStorage.getItem(key) || '')

//   React.useEffect(() => {
//     window.localStorage.setItem(key, name)
//   })

//   return [name, setName]
// }

// export default function App() {
//   const [name, setName] = useLocalStorgeState('name')

//   const handleChange = event => {
//     setName(event.target.value)
//   }

//   return (
//     <div className="mt-3 ml-3">
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input
//           className="border border-gray-600 px-2 ml-2 focus:outline-none mb-2"
//           id="name"
//           autoComplete="off"
//           onChange={handleChange}
//           value={name}
//         ></input>
//       </form>
//       <h2>{name ? <strong>Hello {name}</strong> : 'Please type your name'}</h2>
//     </div>
//   )
// }

// export default function App() {
//   const [value, setValue] = useState('')
//   const renderCount = useRef(1)

//   React.useEffect(() => {
//     // console.log('rendered')
//     renderCount.current = renderCount.current + 1
//   })

//   const handleChange = event => {
//     setValue(event.target.value)
//   }

//   return (
//     <div className="mt-3 ml-3">
//       <input
//         className="border border-gray-600 pl-2 mb-1"
//         onChange={handleChange}
//       ></input>
//       <div>My name is {value}</div>
//       <span>I rendered {renderCount.current} time</span>
//     </div>
//   )
// // }
// export default function App() {
//   const [name, setName] = useState('')
//   const inputRef = useRef()

//   const focus = () => {
//     inputRef.current.focus()
//   }

//   const handleChange = event => {
//     setName(event.target.value)
//   }
//   return (
//     <div className="mt-3 ml-3">
//       <input
//         ref={inputRef}
//         onChange={handleChange}
//         className="border border-gray-400 pl-2 mb-2"
//       ></input>
//       <div>
//         <button onClick={focus} className="border border-gray-500 px-4">
//           Focus
//         </button>
//       </div>
//     </div>
//   )
// }

// export default function App() {
//   const inputRef = useRef()

//   const focus = () => {
//     inputRef.current.focus()
//   }
//   return (
//     <div className="mt-3 ml-3">
//       <input
//         ref={inputRef}
//         className="border border-gray-400 pl-2 mb-2"
//       ></input>
//       <div>
//         <button onClick={focus} className="border border-gray-500 px-4">
//           Focus
//         </button>
//       </div>
//     </div>
//   )
// }

// export default function App() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth)
//   }

//   React.useEffect(() => {
//     window.addEventListener('resize', handleResize)
//   }, [])
//   return <div>{windowWidth}</div>
// }

// export default function App() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth)
//   }
//   React.useEffect(() => {
//     window.addEventListener('resize', handleResize)
//   }, [])
//   return <div>{windowWidth}</div>
// }

// export default function App() {
//   const [value, setValue] = useState(0)
//   const handleClick = e => {
//     setValue(value + 1)
//   }
//   React.useEffect(() => {
//     console.log('rendered')
//   }, [value])
//   return (
//     <button onClick={handleClick} className="border border-black px-5">
//       {value}
//     </button>
//   )
// }
