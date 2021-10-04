exports.dates = {
  addDay(num) {
    const date = new Date();
    date.setDate(date.getDate() + num);
    return date;
  },
  tomorrow() {
    return this.addDay(1);
  },
  yesterday() {
    return this.addDay(-1);
  },
};
