export const getUsernameInitials = (username) => {
    const splittedName = username.split(' ');
    if (splittedName.length === 1) {
        let letters = [...splittedName.toString()];
        return letters[0].toUpperCase();
    }
    let firstname = [...splittedName[0].toString()];
    let lastName = [...splittedName[splittedName.length - 1].toString()];
    let usernameInitials = firstname[0].toUpperCase() + lastName[0].toUpperCase();
    return usernameInitials;
}