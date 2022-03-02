function getBotResponse(input) {

    if (input.toLowerCase() == "hello") {
        return "Hello there!";
    } else if (input.toLowerCase() == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}