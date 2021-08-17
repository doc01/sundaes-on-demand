import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
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

test("popover responds to hover",async  () => {
  render(<SummaryForm />);
  //popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mosuseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  //popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() => screen.queryByText(
    /no ice cream will actually be delivered/i
  ));
});
