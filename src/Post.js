export default class Post {
  constructor(title, img) {
    this.title = title;
    this.image = img;
    this.date = new Date();
  }

  toString() {
    return JSON.stringify(
      {
        title: this.title,
        date: this.date.toJSON(),
        img: this.image,
      },
      null,
      2
    );
  }
}
