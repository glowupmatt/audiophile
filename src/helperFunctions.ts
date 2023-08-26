export const currencyFormatter = (value: string) => {
  const toNumber = parseFloat(value);
  return toNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
