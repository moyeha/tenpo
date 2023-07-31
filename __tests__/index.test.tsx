import React from "react";
import renderer from "react-test-renderer";

// jest.mock("expo-router");

// jest.mock("react-i18next", () => ({
//   // this mock makes sure any components using the translate hook can use it without a warning being shown
//   useTranslation: () => {
//     return {
//       t: (str) => str,
//       i18n: {
//         changeLanguage: () => new Promise(() => {}),
//       },
//     };
//   },
//   initReactI18next: {
//     type: "3rdParty",
//     init: () => {},
//   },
// }));

import App from "../app/index";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree.children.length).toBe(1);
  });
});
