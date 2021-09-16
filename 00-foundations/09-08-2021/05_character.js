// defines a class to store character information
class Character {
  constructor(character, fontName, fontSize) {
    this.character = character;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }

  // just returns the character being stored in the instance
  drawCharacter() {
    return this.character;
  }
}

// defines a character that sotrs a letter
class Letter extends Character {
  constructor(character, fontName, fontSize, charCase) {
    // here we reuse the constructor of the parent class for DRYness
    super(character, fontName, fontSize);

    // we also store whether the variable is lowercase or uppercase
    this.charCase = charCase;
  }

  // converts the character to lower case
  toLowerCase() {
    this.character = this.character.toLowerCase();
    this.charCase = "lowerCase";
  }

  // converts the character to upper case
  toUpperCase() {
    this.character = this.character.toUpperCase();
    this.charCase = "upperCase";
  }

  // returns the case ("upperCase" || "lowerCase")
  getCase() {
    return this.charCase;
  }
}
