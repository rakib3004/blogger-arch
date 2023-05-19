
  it("should increment count on click", async () => {
    render(<App />)
    const counter = screen.getByRole("button", { name: /count is/i })
    expect(counter.textContent).toBe("count is 0")
    await userEvent.click(counter)
    expect(counter.textContent).toBe("count is 1")
  })

  it('should display the person name', () => {
    // Arrange
    const person = 'John';

    // Act
    const { getByText } = render(<SayHello person={person} />);

    // Assert
    const element = getByText('Hello John!');
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H1');
  });