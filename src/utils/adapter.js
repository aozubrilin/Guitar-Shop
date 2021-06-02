export const adaptToClient = (data) => {
  return {
    id: data.id,
    code: data.code,
    name: data.name,
    type: data.type,
    popularity: data.popularity,
    stings: data.stings,
    price: data.price,
  };
};

export const getAdaptedData = (dataArray) =>
  dataArray.map((item) => adaptToClient(item));
