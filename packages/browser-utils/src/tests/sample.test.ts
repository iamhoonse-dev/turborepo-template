import { test, expect } from "vitest";

// query utilities:
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  getByRole,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

function getExampleDOM() {
  // This is just a raw example of setting up some DOM
  // that we can interact with. Swap this with your UI
  // framework of choice 😉
  const div = document.createElement("div");
  div.innerHTML = `
    <label for="username">Username</label>
    <input id="username" />
    <button>Print Username</button>
  `;
  const button = div.querySelector("button")!;
  const input = div.querySelector("input")!;
  button.addEventListener("click", () => {
    // let's pretend this is making a server request, so it's async
    // (you'd want to mock this imaginary request in your unit tests)...
    setTimeout(() => {
      const printedUsernameContainer = document.createElement("div");
      printedUsernameContainer.innerHTML = `
        <div data-testid="printed-username">${input.value}</div>
      `;
      div.appendChild(printedUsernameContainer);
    }, 100);
  });
  return div;
}

test("examples of some things", async () => {
  const famousProgrammerInHistory = "Ada Lovelace";
  const container = getExampleDOM();

  // Get form elements by their label text.
  // An error will be thrown if one cannot be found (accessibility FTW!)
  const input = getByLabelText(container, "Username") as HTMLInputElement;
  input.value = famousProgrammerInHistory;

  // Get elements by their text, just like a real user does.
  getByText(container, "Print Username").click();

  await waitFor(() =>
    expect(queryByTestId(container, "printed-username")).toBeTruthy(),
  );

  // getByTestId and queryByTestId are an escape hatch to get elements
  // by a test id (could also attempt to get this element by its text)
  expect(getByTestId(container, "printed-username")).toHaveTextContent(
    famousProgrammerInHistory,
  );

  // button is clickable
  const button = getByRole(container, "button", { name: "Print Username" });
  await userEvent.click(button);

  // jest snapshots work great with regular DOM nodes!
  // expect(container).toMatchSnapshot(); // fixme: this is not working
});
