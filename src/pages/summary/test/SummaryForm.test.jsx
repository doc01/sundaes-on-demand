import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("Checkbox", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  test("Checking checkbox enables button, and again disabled button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });

    const confirmOrderButton = screen.getByRole("button", {
      name: /Confirm order/i,
    });
    // enable button
    userEvent.click(checkbox);
    expect(confirmOrderButton).toBeEnabled();
    // disabled button
    userEvent.click(checkbox);
    expect(confirmOrderButton).toBeDisabled();
  });
});
