import React from "react";
import renderer from "react-test-renderer";
import Todo from "./Todo";

const TODO = [{ id: "todo-0", name: "Eat", completed: true }];

describe("The <Todo/> component", () => {
  it("should match its snapshot", () => {
    const tree = renderer
      .create(
        <Todo
          id={TODO[0].id}
          name={TODO[0].name}
          completed={TODO[0].completed}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
