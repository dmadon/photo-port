import React from 'react';
import {render,cleanup,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockIsModalOpen = jest.fn();
const mockToggleModal = jest.fn();


const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index:1
}

describe('Modal component',() => {
    it('renders',() => {
        render(mockIsModalOpen && 
            <Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
          />);          
    })
    it('matches snapshot',() => {
        const {asFragment} = render(mockIsModalOpen && 
            <Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
          />);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Click event',() => {
    it('calls OnClose handler', () => {
        const {getByText} = render(mockIsModalOpen && 
            <Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
          />);  
        fireEvent.click(getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})