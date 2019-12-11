import numbersProcessor from "./numbersProcessor";

it("should return the correct number", () => {
  expect(numbersProcessor(5)).toEqual("five");
  expect(numbersProcessor(11)).toEqual("eleven");
  expect(numbersProcessor(24)).toEqual("twenty four");
  expect(numbersProcessor(60)).toEqual("sixty");
  expect(numbersProcessor(126)).toEqual("one hundred twenty six");
});
