import{render,screen,fireEvent} from '@testing-library/react';
import Navbar from './NavBar';






test('The Navbar component should respond to button click',() => {


    const mockFunction = jest.fn()
    render(<Navbar goBack={mockFunction} />)
    fireEvent.click(screen.getByText('<Go Back'))  
    expect(mockFunction).toHaveBeenCalled();

    fireEvent.click(screen.getByText('+ Add Review'))
    expect(mockFunction).toHaveBeenCalledTimes(2)


})






// import {render,screen} from '@testing-library/react';
// import Navbar from './NavBar';





// test('The Navbar component should render with a title', () =>{



//     const title = 'Test Application';

//     render(<Navbar title={title} />);

//     expect(screen.getByRole('heading')).toHaveTextContent(title)






// })








// // test('The Navbar component should render', () => {


//     // expect(1 + 2).toBe(3);


//     // const view = render(<Navbar />)
//     // expect(view).toMatchSnapshot()

//     // test('The Navbar component should be render with a title',()=>{


//     //     const view = render(<Navbar title='Test application 2'/>);
//     //     expect(view).toMatchSnapshot();


//     // });


    

// // })