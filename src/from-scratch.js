class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.side4 = side4
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4
  }
}

class Rectangle extends Quadrilateral {
  constructor(length, width) {
    super(length, width, length, width)
  }
  getArea(s1, s2) {
    this.s1 = s1
    this.s2 = s2
  }
}

class Square {

}

/* Be creative with this one! */
class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
