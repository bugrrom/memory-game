export const generateCards = (icons: { name: string; open: boolean }[]) => {
  const items = JSON.parse(JSON.stringify(icons));
  items.sort(() => Math.random() - 0.5);
  return items;
};
