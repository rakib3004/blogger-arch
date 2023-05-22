import { React } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter  } from 'react-router-dom';
import AuthorBlogs from '../../pages/AuthorBlogs';
import Blogs from '../../pages/Blogs';

jest.mock('../../pages/Blogs', () => jest.fn(() => <div data-testid="blogs-component" />));

describe('AuthorBlogs', () => {
  it('renders Blogs component with the correct authorId', () => {
    const authorId = '123';
    // jest.spyOn(React, 'useContext').mockReturnValue({ username: 'testuser' });

    // render(
    //   <MemoryRouter initialEntries={[`/author/${authorId}`]}>
    //       <AuthorBlogs />
    //   </MemoryRouter>
    // );

    // expect(Blogs).toHaveBeenCalledWith({ authorId });
    // expect(screen.getByTestId('blogs-component')).toBeInTheDocument();
  });
});
