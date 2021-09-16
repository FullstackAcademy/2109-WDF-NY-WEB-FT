// also valid below but slightly more mind-bending
// function createBook(id, title, author, price, rating = []) {
//   const object = Object.create({
//     getPrice: () => price,
//     getInfo: () => `${title} by ${author}`,
//     addRating: function (newRating) {
//       this.rating.push(newRating);
//     },
//     getRating: function () {
//       // const totalStars = this.rating.reduce(
//       //   (previous, current) => previous + current.length,
//       //   this.rating[0].length
//       // );
//       let totalStars = 0;

//       this.rating.forEach((rating) => {
//         totalStars += rating.length;
//       });

//       // totalStars = this.rating
//       //   .map((rating) => rating.length)
//       //   .reduce((previous, current) => (previous += current));

//       return totalStars / this.rating.length;
//     },
//   });

//   return Object.assign(object, { id, title, author, price, rating });
// }

function createBook(id, title, author, price) {
  const object = Object.create({
    getPrice: function () {
      return this.price;
    },
    getInfo: function () {
      return `${this.title} by ${this.author}`;
    },
    addRating: function (stars) {
      this.rating.push(stars);
    },
    getRating: function () {
      let rateCount = 0;

      for (let i = 0; i < this.rating.length; ++i) {
        rateCount += this.rating[i].length;
      }

      return rateCount / this.rating.length;
    },
  });

  object.id = id;
  object.title = title;
  object.author = author;
  object.price = price;
  object.rating = [];

  return object;
}
