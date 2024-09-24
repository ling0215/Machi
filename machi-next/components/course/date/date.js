function FormattedDate({ dateString }) {
  // Parse the input date string
  const date = new Date(dateString);

  // Subtract 8 hours (8 * 60 * 60 * 1000 milliseconds)
  date.setTime(date.getTime() - (8 * 60 * 60 * 1000));

  // Extract the date components
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  // Format the date string
  const formattedDate = `${year}-${month}-${day}-${hours}:${minutes}`;

  // Return the formatted date within a span element
  return (
    <span>{formattedDate}</span>
  );
}

export default FormattedDate;
