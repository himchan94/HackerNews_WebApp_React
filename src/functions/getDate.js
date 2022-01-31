const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const today = new Date();

const getDate = (unix) => {
  const converted = new Date(unix * 1000);

  const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utc2 = Date.UTC(
    converted.getFullYear(),
    converted.getMonth(),
    converted.getDate()
  );

  const date = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  if (!date) {
    const hour_gap = today.getHours() - converted.getHours();

    if (!hour_gap) {
      const minutes_gap = today.getMinutes() - converted.getMinutes();

      if (!minutes_gap) {
        const seconds_gap = today.getSeconds() - converted.getSeconds();
        return `${seconds_gap} seconds ago`;
      }
      return `${minutes_gap} minutes ago`;
    }

    return `${hour_gap} hours ago`;
  }

  return `${-date} days ago`;
};

export default getDate;
