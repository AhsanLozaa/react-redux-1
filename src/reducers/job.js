const jobReducer = (state = "VIP", action) => {
    switch (action.type) {
        case "Student":
            return "Do the assignment";
            break;
        case "Teacher":
            return "Mark the assignment";
            break;
        case "Reset":
            return "..................."
        default:
            return state;
    }
}

export default jobReducer;