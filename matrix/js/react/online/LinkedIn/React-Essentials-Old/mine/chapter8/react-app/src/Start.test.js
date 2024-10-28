import { render } from "@testing-library/react";
import { Star } from "./Star";

test("renders an h1", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/cool star/);

  expect(h1).toHaveTextContent("cool star");
});
