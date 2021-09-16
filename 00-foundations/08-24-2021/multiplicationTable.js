function multiplicationTable(rowCount, columnCount) {
  const grid = [];

  for (let i = 1; i <= rowCount; ++i) {
    const columns = [];

    for (let j = 1; j <= columnCount; ++j) {
      columns.push(j * i);
    }

    grid.push(columns);
  }

  return grid;
}
