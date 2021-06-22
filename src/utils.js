export const getUsernameInitials = (username) => {
    const splittedName = username.split(' ');
    if (splittedName.length === 1) {
        let letters = [...splittedName.toString()];
        if (letters.length) {

            return letters[0].toUpperCase();
        }
        return ""
    }
    let firstname = [...splittedName[0].toString()];
    let lastName = [...splittedName[splittedName.length - 1].toString()];
    let firstInitial = ""
    let lastInitial = ""
    if (firstname.length) {
        firstInitial = firstname[0].toUpperCase()
    }
    if (lastName.length) {
        lastInitial = lastName[0].toUpperCase();
    }

    return firstInitial + lastInitial;
}