// Test data for Progress Bar

const testProgressBarItems = [
  {name: 'Sold', color: '#BD1FBE', value: 677},
  {name: 'Got free', color: '#FC64FF', value: 23},
  {name: 'Burned', color: '#19DE38', value: 202},
  {name: 'Free float', color: '#9BA3AA', value: 323},
];

export const ProgressBarTestCase = {
  items: testProgressBarItems,
  width: 1000,
  height: 30
}

// Test data for Table Component

const testTableCompItems = [
  {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
  {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
  {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
];

const filters = {
  type: 'TR',
  status: 'green'
};

const onSort = (name) => {

}

const onFilter = (name) => {

}

const onBuy = (id) => {
  alert(`Good with id ${id} sold`);
}

export const TableComponentTestCase = {
  items: testTableCompItems,
  filters,
  onSort,
  onFilter,
  onBuy
}
