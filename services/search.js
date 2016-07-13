function findSticks(query, done){
  var found = {
    results: [
    {
      name: "Bauer 1X Youth",
      id: 01,
      sku: 101101,
      brand: "Bauer",
      flex: "Youth Flex",
      curve: "Mid Curve",
      size: "Youth" 
    },
    {
      name: "Bauer 1X Senior",
      id: 02,
      sku: 101102,
      brand: "Bauer",
      flex: "Senior Standard Flex",
      curve: "Mid Curve",
      size: "Senior" 
    },
    {
      name: "CCM RBZ 260 Senior",
      id: 03,
      sku: 101103,
      brand: "CCM",
      flex: "Senior Standard Flex",
      curve: "Mid Curve",
      size: "Senior" 
    },
    {
      name: "CCM Super Tack Senior",
      id: 04,
      sku: 101104,
      brand: "CCM",
      flex: "Senior Standard Flex",
      curve: "Mid Curve",
      size: "Senior" 
    },
    {
      name: "Bauer 1X Intermediate",
      id: 05,
      sku: 101105,
      brand: "Bauer",
      flex: "Intermediate Standard Flex",
      curve: "Mid Curve",
      size: "Intermediate" 
    }
    ]
  };
  done(null, found); //err first callback
}
var optionLists = {
  flexes:  {
    "Youth Flex" : "Youth Flex",
    "Junior Light Flex" : "Junior Light Flex",
    "Junior Standard Flex" : "Junior Standard Flex",
    "Intermediate Light Flex" : "Intermediate Light Flex",
    "Intermediate Standard Flex" : "Intermediate Standard Flex",
    "Intermediate Stiff Flex" : "Intermediate Stiff Flex",
    "Senior Light Flex" : "Senior Light Flex",
    "Senior Standard Flex" : "Senior Standard Flex",
    "Senior Stiff Flex" : "Senior Stiff Flex"
  },
  curves: {
    "Mid Curve" : "Mid Curve", 
    "Heel Curve" : "Heel Curve", 
    "Toe Curve" : "Toe Curve", 
    "Mid-Heel Curve" : "Mid-Heel Curve", 
    "Mid-Toe Curve" : "Mid-Toe Curve"
  },
  brands: {
    "Bauer" : "Bauer",
    "CCM" : "CCM",
    "SherWood" : "SherWood",
    "Easton" : "Easton",
    "STX" : "STX"
  },
  sizes: {
    "Youth" : "Youth",
    "Junior" : "Junior",
    "Intermediate" : "Intermediate",
    "Senior" : "Senior",
  }
};

module.exports = {
  optionLists: optionLists,
  findSticks: findSticks
};
