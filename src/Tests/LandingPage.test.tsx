import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";

import LandingPage from "../Pages/LandingPage";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

let container: any;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("test that LandingPage component renders", () => {
  act(() => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
      container
    );
  });

  expect(screen.getByText("Join us !")).toBeInTheDocument();
});

test("Registration form renders and functions", () => {
  act(() => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
  });

  const firsNameInput = screen.getByPlaceholderText(/John/) as HTMLElement;
  const lastNameInput = screen.getByPlaceholderText(/Doe/) as HTMLElement;
  const emailAddressInput = screen.getByPlaceholderText(
    /doej@montclair.edu/
  ) as HTMLElement;

  act(() => {
    fireEvent.change(firsNameInput, { target: { value: "React" } });
    fireEvent.change(lastNameInput, { target: { value: "Testing" } });
    fireEvent.change(emailAddressInput, {
      target: { value: "reacttesting@montclair.edu" },
    });
  });

  expect(firsNameInput).toHaveValue("React");
  expect(lastNameInput).toHaveValue("Testing");
  expect(emailAddressInput).toHaveValue("reacttesting@montclair.edu");
});
