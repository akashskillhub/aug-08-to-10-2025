function getEmail(userName: string, domain: string) {
    let email: string = userName + "@" + domain;
    if (email.length > 10) {
        return email;
    }
    return 123;
}
