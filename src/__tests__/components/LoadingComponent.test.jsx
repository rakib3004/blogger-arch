import { render, screen } from "@testing-library/react";
import LoadingComponent from "../../components/LoadingComponent";

describe("LoadingComponent", () => {
  it("renders loading text and circular progress", () => {
    render(<LoadingComponent />);

    const loadingText = screen.getByText("Loading .. .. ..");
    expect(loadingText).toBeInTheDocument();

    const circularProgress = screen.getByRole("progressbar");
    expect(circularProgress).toBeInTheDocument();
  });
});
