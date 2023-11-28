import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HookApp } from './HookApp'

import './index.css'


//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithHook } from './01-useState/CounterWithHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CustomHookForm } from './02-useEffect/CustomHookForm'
//import { MultpleCustomHooks } from './03-examples/MultpleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-Memo/Memorize'
//import { MemoHook } from './06-Memo/MemoHook'
//import { CallBackHook } from './06-Memo/CallBackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/*<React.StrictMode> */}
      <MainApp/>
    {/*</React.StrictMode>  */}
  </BrowserRouter>

)
