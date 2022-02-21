const Period = [
  { _id: 1, name: "Day" },
  { _id: 2, name: "Week" },
  { _id: 3, name: "Month" },
  { _id: 4, name: "Year" },
  { _id: 5, name: "Bucket list" },
];

const Price = [
  { _id: 0, name: "Any", array: [] },
  { _id: 1, name: "0 to 4,999", array: [0, 4999] },
  { _id: 2, name: "5,000 to 9,999", array: [5000, 9999] },
  { _id: 3, name: "10,000 to 49,999", array: [10000, 49999] },
  { _id: 4, name: "50,000 to 500,000", array: [50000, 500000] },
];

export { Period, Price };
