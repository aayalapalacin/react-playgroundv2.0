import { generateTutorialNames } from "./page"; // Adjust the path as needed


describe("generateTutorialNames", () => {
  const mockTutorials = [
    { name: "React Auth", category: "Authentication" },
    { name: "OAuth Setup", category: "Authentication" },
    { name: "UI Best Practices", category: "UI/UX" },
    { name: "Security Essentials", category: "Security" },
  ];

  it("returns only tutorials matching the selected category", () => {
    expect(generateTutorialNames("Authentication",mockTutorials)).toEqual([
      "React Auth",
      "OAuth Setup",
    ]);
  });

 


});
