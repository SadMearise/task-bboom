export const getCurrentDateTime = (): string => {
  const now = new Date();
  const addLeadingZero = (num: number) => num.toString().padStart(2, "0");

  const hours = addLeadingZero(now.getHours());
  const minutes = addLeadingZero(now.getMinutes());
  const seconds = addLeadingZero(now.getSeconds());

  const day = addLeadingZero(now.getDate());
  const month = addLeadingZero(now.getMonth() + 1);
  const year = now.getFullYear();

  return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;
};
