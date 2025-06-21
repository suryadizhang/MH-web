class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const msg = message.toLowerCase();

    if (msg.includes("menu")) {
      this.actionProvider.handleMenu();
    } else if (msg.includes("price") || msg.includes("cost") || msg.includes("how much")) {
      this.actionProvider.handlePricing();
    } else if (msg.includes("book") || msg.includes("reserve") || msg.includes("schedule")) {
      this.actionProvider.handleBooking();
    } else if (msg.includes("vegetarian") || msg.includes("gluten") || msg.includes("allergy") || msg.includes("diet")) {
      this.actionProvider.handleDiet();
    } else if (msg.includes("how long") || msg.includes("duration") || msg.includes("time")) {
      this.actionProvider.handleDuration();
    } else if (msg.includes("setup") || msg.includes("prepare") || msg.includes("clean") || msg.includes("bring")) {
      this.actionProvider.handleSetup();
    } else if (msg.includes("area") || msg.includes("location") || msg.includes("where") || msg.includes("serve")) {
      this.actionProvider.handleLocation();
    } else if (msg.includes("kids") || msg.includes("children") || msg.includes("birthday")) {
      this.actionProvider.handleEvents();
    } else if (msg.includes("tip") || msg.includes("tipping") || msg.includes("gratuity")) {
      this.actionProvider.handleTipping();
    } else if (msg.includes("weather") || msg.includes("rain") || msg.includes("cancel") || msg.includes("reschedule")) {
      this.actionProvider.handleWeather();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
