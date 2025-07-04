import { setMemory, addHistory } from '../../store';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, dispatch, memory) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.dispatch = dispatch;
    this.memory = memory;
  }

  handleMenu = () => {
    const message = this.createChatBotMessage(
      <>
        <img src="/src/assets/hero_pic.png" alt="Hibachi Menu" style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />
        Our menu includes Chicken, NY Strip Steak, Shrimp, Salmon, and Tofu. Every meal comes with fried rice, mixed vegetables, side salad, and signature sauces. Upgrades: Stir-fried Noodles, Scallops, Filet Mignon (+$5), Lobster Tail, 3rd Protein (+$10).
        <br />
        <a href="/menu" target="_blank" rel="noopener noreferrer">See full menu</a>
      </>
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      lastIntent: "menu"
    }));
    this.dispatch(setMemory({ lastIntent: "menu", lastTopic: "menu" }));
    this.dispatch(addHistory({ intent: "menu", timestamp: Date.now() }));
  };

  handlePricing = () => {
    let contextMsg = "";
    if (this.memory?.lastTopic === "menu") {
      contextMsg = "For the menu you just asked about: ";
    }
    const message = this.createChatBotMessage(
      `${contextMsg}Pricing: $55 per adult, $30 per child (ages 6–12), free for 5 and under. $550 minimum per party. Upgrades and travel fees may apply. See the Menu page for details.`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      lastIntent: "pricing"
    }));
    this.dispatch(setMemory({ lastIntent: "pricing", lastTopic: "pricing" }));
    this.dispatch(addHistory({ intent: "pricing", timestamp: Date.now() }));
  };

  handleBooking = () => {
    const message = this.createChatBotMessage(
      "To book, click 'Book Now' at the top or 'Order Now' on the Menu page. You can select your date, time, and preferences. Booking must be at least 2 days in advance."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "booking" }));
  };

  handleDiet = () => {
    const message = this.createChatBotMessage(
      "Yes, we offer vegetarian, vegan, gluten-free, dairy-free, halal, and kosher options. Please let us know your dietary needs when booking."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "diet" }));
  };

  handleDuration = () => {
    const message = this.createChatBotMessage(
      "A typical hibachi event lasts about 2–2.5 hours, depending on your group size and menu choices."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "duration" }));
  };

  handleSetup = () => {
    const message = this.createChatBotMessage(
      "You should set up utensils, dinner plates, salad plates, drinks, tables, and chairs. We bring the chef, food, entertainment, and fun! We do NOT provide party setup or furniture."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "setup" }));
  };

  handleLocation = () => {
    const message = this.createChatBotMessage(
      "We serve San Jose, San Francisco, Sacramento, Bay Area, and surrounding regions. For remote areas, a travel fee may apply."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "location" }));
  };

  handleEvents = () => {
    const message = this.createChatBotMessage(
      "We cater for birthdays, weddings, proposals, family reunions, corporate events, anniversaries, holiday parties, and more. Kids are welcome!"
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "events" }));
  };

  handleTipping = () => {
    const message = this.createChatBotMessage(
      "Tips are not included in the base price. We recommend tipping your chef at the end of the event. You can pay cash or ask for other options."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "tipping" }));
  };

  handleWeather = () => {
    const message = this.createChatBotMessage(
      "If bad weather is expected, please contact us to reschedule or discuss indoor options. We can cook indoors if notified ahead and there is proper ventilation."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "weather" }));
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      <>
        {"I'm not sure about that. For more help, please contact our customer service:"}
        <br /><br />
        <strong>📧 Email:</strong> <a href="mailto:info@myhibachi.com" target="_blank" rel="noopener noreferrer">info@myhibachi.com</a><br />
        <strong>📱 Text:</strong> <a href="sms:+19167408768" target="_blank" rel="noopener noreferrer">+1 (916) 740-8768</a> (Text only)<br />
        <strong>📸 Instagram:</strong> <a href="https://www.instagram.com/my_hibachi/" target="_blank" rel="noopener noreferrer">@my_hibachi</a><br />
        <strong>📘 Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61577483702847" target="_blank" rel="noopener noreferrer">My Hibachi Facebook Page</a><br /><br />
        Or visit our <a href="/contact">Contact page</a>.
      </>
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "default" }));
  };

  handleHello = () => {
    const message = this.createChatBotMessage(
      "How can I help you today?",
      {
        widget: "quickReplies"
      }
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], lastIntent: "hello" }));
  };

  // Multi-step dialog logic
  startDialog = (dialog, firstStep) => {
    // Always reset dialog state before starting a new dialog
    this.dispatch(setMemory({
      currentDialog: dialog,
      dialogStep: firstStep,
      dialogData: {}
    }));
    this.askDialogStep(dialog, firstStep);
  };

  askDialogStep = (dialog, step) => {
    let prompt = "";
    // Booking dialog
    if (dialog === "booking") {
      if (step === "date") prompt = "What date would you like to book?";
      if (step === "guests") prompt = "How many guests will attend?";
      if (step === "name") prompt = "What is your name?";
    }
    // Dietary dialog
    if (dialog === "dietary") {
      if (step === "allergy") prompt = "Do you or your guests have any allergies or dietary restrictions?";
      if (step === "preference") prompt = "Any other dietary preferences (vegan, halal, etc)?";
    }
    // Feedback dialog
    if (dialog === "feedback") {
      if (step === "rating") prompt = "How would you rate your experience (1-5)?";
      if (step === "comment") prompt = "Any comments or suggestions?";
    }
    // Contact dialog
    if (dialog === "contact") {
      if (step === "name") prompt = "What's your name?";
      if (step === "email") prompt = "What's your email address?";
      if (step === "message") prompt = "What's your message for us?";
    }
    // Event dialog
    if (dialog === "event") {
      if (step === "type") prompt = "What type of event are you planning?";
      if (step === "date") prompt = "What date is your event?";
      if (step === "guests") prompt = "How many guests will attend?";
      if (step === "requests") prompt = "Any special requests?";
    }
    const message = this.createChatBotMessage(prompt);
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    this.dispatch(setMemory({ dialogStep: step }));
  };

  saveDialogStep = (dialog, step, value) => {
    // Example: Validate email for contact dialog
    if (dialog === "contact" && step === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        const message = this.createChatBotMessage("Please enter a valid email address.");
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
        return;
      }
    }
    // Save the answer for this step
    this.dispatch(setMemory({
      dialogData: { ...this.memory.dialogData, [step]: value }
    }));
  };

  nextDialogStep = (dialog, currentStep) => {
    // Define the step order for each dialog
    const dialogFlows = {
      booking: ["date", "guests", "name"],
      dietary: ["allergy", "preference"],
      feedback: ["rating", "comment"],
      contact: ["name", "email", "message"],
      event: ["type", "date", "guests", "requests"],
      // Add more dialogs here
    };
    const steps = dialogFlows[dialog];
    const idx = steps.indexOf(currentStep);
    if (idx >= 0 && idx < steps.length - 1) {
      const nextStep = steps[idx + 1];
      this.askDialogStep(dialog, nextStep);
    } else {
      this.finishDialog(dialog);
    }
  };

  finishDialog = (dialog) => {
    let summary = "";
    if (dialog === "booking") {
      const { date, guests, name } = this.memory.dialogData;
      summary = `Thank you${name ? ", " + name : ""}! Your booking for ${guests || "___"} guests on ${date || "___"} is noted. We'll contact you soon to confirm.`;
    }
    if (dialog === "dietary") {
      const { allergy, preference } = this.memory.dialogData;
      summary = `Thank you! We'll note: ${allergy || "no allergies"}${preference ? ", " + preference : ""}.`;
    }
    if (dialog === "feedback") {
      const { rating, comment } = this.memory.dialogData;
      summary = `Thank you for your feedback! Rating: ${rating || "N/A"}. ${comment ? "Comment: " + comment : ""}`;
    }
    if (dialog === "contact") {
      const { name, email, message } = this.memory.dialogData;
      summary = `Thank you${name ? ", " + name : ""}! We received your message: "${message || ""}". We'll reply to ${email || "your email"} soon.`;
    }
    if (dialog === "event") {
      const { type, date, guests, requests } = this.memory.dialogData;
      summary = `Event: ${type || "N/A"}, Date: ${date || "N/A"}, Guests: ${guests || "N/A"}${requests ? ", Requests: " + requests : ""}. We'll be in touch!`;
    }
    const message = this.createChatBotMessage(summary);
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    this.dispatch(setMemory({ currentDialog: null, dialogStep: null, dialogData: {} }));
  };
}

export default ActionProvider;
