import React from 'react';
import { render,  fireEvent } from '@testing-library/react';
import UserCard from '../../components/UserCard';

describe('UserCard', () => {
  const user = {
    id: 1,
    username: 'JohnDoe',
    email: 'john@example.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it('should render the user card with correct details', () => {
    const { container } = render(<UserCard user={user} />);
    const screen  = container.firstChild;



    // expect(usernameElement).toBeInTheDocument();
    // expect(emailElement).toBeInTheDocument();
    // expect(createdAtElement).toBeInTheDocument();
    // expect(updatedAtElement).toBeInTheDocument();

    // const usernameElement = screen.getByText(user.username);
    // const emailElement = screen.getByText(`Email: ${user.email}`);
    // const createdAtElement = screen.getByText(
    //   `Created At: ${user.createdAt.toLocaleString()}`
    // );
    // const updatedAtElement = screen.getByText(
    //   `Last Updated: ${user.updatedAt.toLocaleString()}`
    // );

    expect(screen).toHaveTextContent(user.username, `Email: ${user.email}`, `Created At: ${user.createdAt.toLocaleString()}`, `Last Updated: ${user.updatedAt.toLocaleString()}`);
    // expect(screen).toHaveTextContent(`Email: ${user.email}`);
    // expect(screen).toHaveTextContent(`Created At: ${user.createdAt.toLocaleString()}`);
    // expect(screen).toHaveTextContent(`Last Updated: ${user.updatedAt.toLocaleString()}`);
  });

  // it('should navigate to user blogs when "Show Blogs" button is clicked', () => {
  //   const navigateTo = jest.fn();
  //   jest.mock('react-router-dom', () => ({
  //     useNavigate: () => navigateTo,
  //   }));

  //   render(<UserCard user={user} />);

  //   const showBlogsButton = screen.getByText('Show Blogs');
  //   fireEvent.click(showBlogsButton);

  //   expect(navigateTo).toHaveBeenCalledWith(`/blogs/author/${user.id}`);
  // });
});
