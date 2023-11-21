
export const getColor = (category) => {
    switch (category) {
        case "nonmetal":
            return "#FFFFCE"
        case "alkali metal":
            return "#FFCACC"
        case "alkaline earth metal":
            return "#D4D5FF"
        case "transition metal":
            return "#C6E1FF"
        case "metalloid":
            return "#E5F1CC"
        case "post-transition metal":
            return "#CDFFCD"
        case "lanthanide":
            return "#BBFFFF"
        case "actinide":
            return "#CDFFEE"
        case "noble gas":
            return "#FFE5C7"
        case "halogen":
            return "#FFFFCF"
        default:
            break;
    }

    return "transparent";
};