export const correctData = (date: number) => {
  return date > 9 ? `${date}` : `0${date}`;
};

export const eventTime = (time: string) =>
  `${new Date(time).getFullYear()}-${correctData(
    new Date(time).getMonth() + 1,
  )}-${correctData(new Date(time).getDate())} ${correctData(
    new Date(time).getHours(),
  )}:${correctData(new Date(time).getMinutes())}`;
