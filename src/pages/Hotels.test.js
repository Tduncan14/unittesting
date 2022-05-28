import {render,screen,waitFor} from '@testing-library/react';
import Hotels from './Hotels'
import HotelsContext from '../context/HotelsContext';
import { BrowserRouter } from 'react-router-dom';











test('The Hotels component should render a list of hotels', async() => {

    
const mockFunction = jest.fn()


const wrapper  = ({children}) => (


 <BrowserRouter>
  <HotelsContext.Provider
    value={{
        loading:true,
        error:'',
        hotels:[],
        fetchHotels:mockFunction,
    }}>
        {children}

  </HotelsContext.Provider>
 
 </BrowserRouter>
)

render(<Hotels />,{wrapper});

expect(screen.queryByText('Loading...')).toBeVisible();


await waitFor(()=> expect(mockFunction).toHaveBeenCalledTimes(1))


})


// test('The Hotels Component should render', async () => {


//     const wrapper = ({children}) => (

//         <HotelsContext.Provider
//          value={{
//              loading:true,
//              error:'',
//              hotels:[],
//              fetchHotels:jest.fn()
//          }}
        
        
//         >
//             {children}
//         </HotelsContext.Provider>

//     )



//     render(<Hotels />,{wrapper})
//     expect(await screen.findByText('Loading...')).toBeVisible()

// })





