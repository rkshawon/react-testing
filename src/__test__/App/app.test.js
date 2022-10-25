import { render, screen, fireEvent } from "@testing-library/react";

import {} from "@testing-library/react";
import App from "../../App";

describe("Testing", () => {
  it("header h1", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText(/Fill out this form./i)).toBeInTheDocument();
    const allInput = screen.getAllByRole("textbox");
    expect(allInput.length).toBe(allInput.length);
    expect(screen.getByPlaceholderText("joe@example.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    const submitButton = screen.queryByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });

  it("Testing counter value before click", () => {
    render(<App />);
    const counter = screen.getByText(/Counter:/i);
    expect(counter).toHaveTextContent(0);
  });

  it("Testing counter after after click", () => {
    render(<App />);
    const submitButton = screen.queryByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);
    const counterButton = screen.queryByRole("button", { name: "Counter" });
    expect(counterButton).toBeInTheDocument();
    fireEvent.click(counterButton);
    const counter = screen.getByText(/Counter:/i);
    expect(counter).toHaveTextContent(1);
    fireEvent.click(submitButton);
    expect(counter).toHaveTextContent(0);
  });

  it("Testing input name", () => {
    render(<App />);
    const inputName = screen.getByRole("textbox", { name: "Name" });
    fireEvent.change(inputName, { target: { value: "test name" } });
    expect(inputName.value).toBe("test name");
  });

  it("Testing select", () => {
    render(<App />);
    const selectInput = screen.getByRole("combobox", { name: "T-Shirt Size" });
    expect(selectInput).toBeInTheDocument();
  });

  it("Testing textarea", () => {
    render(<App />);
    const textarea = screen.getByRole("textbox", { name: "Abstract" });
    expect(textarea).toBeInTheDocument();
  });

  it("Testing Radio Button", () => {
    render(<App />);
    const radioInput1 = screen.getByText("Main Stage");
    expect(radioInput1).toBeInTheDocument();
    const radioInput2 = screen.getByText("Workshop");
    expect(radioInput2).toBeInTheDocument();
  });
});
