export const FiterType = {
  PRICE: `price`,
  TYPE: `type`,
  STRINGS: `strings`,
};

export const GuitarType = {
  ACOUSTIC: `acoustick`,
  ELECTRO: `electro`,
  UKULELE: `ukulele`,
};

export const FilterField = {
  [FiterType.TYPE]: [
    { value: 'acoustick', label: 'Акустические гитары' },
    { value: 'electro', label: 'Электрогитары' },
    { value: 'ukulele', label: 'Укулеле' },
  ],

  [FiterType.STRINGS]: [
    { value: 'four', label: 4 },
    { value: 'six', label: 6 },
    { value: 'seven', label: 7 },
    { value: 'eleven', label: 12 },
  ],
};
