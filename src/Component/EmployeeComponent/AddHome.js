import React,{useState} from 'react'
import AddHomeDetail from './AddHomeDetail';
import AddElectricityDetail from './AddElectricityDetail';
import AddWaterDetails from './AddWaterDetails';
export const AddHome = () => {
    const [state, setState] = useState(1);
    const stateHandler = (x) => {
      setState(x);
      console.log(x)
    }
  return (
    <>    <div className='mt-20 ml-10'>
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li onClick={() => stateHandler(1)} className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden text-xl after:mx-2 after:text-gray-200 dark:after:text-gray-500 hover:text-blue-600" >
            <svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Home <span className="hidden sm:inline-flex sm:ml-2">Details</span>
          </span>
        </li>
        <li onClick={() => stateHandler(2)} className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className={state>1?"flex items-center after:content-['/'] sm:after:hidden text-xl after:mx-2 text-blue-600 after:text-gray-200 dark:after:text-gray-500 hover:text-blue-600":"flex items-center after:content-['/'] sm:after:hidden text-xl after:mx-2 after:text-gray-200 dark:after:text-gray-500 hover:text-blue-600"}>
          {state>1?<svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>:
            <span className="mr-2">2</span>}
            Electricity <span className="hidden sm:inline-flex sm:ml-2">Details</span>
          </span>
        </li>
        <li onClick={() => stateHandler(3)} className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ">
          <span className={state>2?"flex items-center after:content-['/'] sm:after:hidden text-xl after:mx-2 text-blue-600 after:text-gray-200 dark:after:text-gray-500 hover:text-blue-600":"flex items-center after:content-['/'] sm:after:hidden text-xl after:mx-2 after:text-gray-200 dark:after:text-gray-500 hover:text-blue-600"}>
          {state>2?<svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>:<span className="mr-2">3</span>}
            Water <span className="hidden sm:inline-flex sm:ml-2">Details</span>
          </span>
        </li>
      </ol>
    </div>
    <div className='mt-4'>
    {
        state==1?<AddHomeDetail />:state==2?<AddElectricityDetail />:<AddWaterDetails />
    }
    </div>
    </>

  )
}
