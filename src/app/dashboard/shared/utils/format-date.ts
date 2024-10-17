export const formatDate = (value: string) => {
  return new Intl.DateTimeFormat("pt-br").format(new Date(value));
};
