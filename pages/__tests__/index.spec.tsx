import { render, RenderResult, screen } from "@testing-library/react";
import Home from "..";
import TestWrapper from "../../test-utils/TestWrapper";

describe("<Home />", () => {
  let renderResult: RenderResult;

  const renderHome = () => {
    renderResult = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );
  };

  describe("default rendering", () => {
    beforeEach(() => {
      renderHome();
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });
});
