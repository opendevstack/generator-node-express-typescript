export class Greeter {
  private readonly greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  public greet() {
    return "Bonjour, " + this.greeting + "!";
  }
}
