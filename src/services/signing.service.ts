export const SighIn = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email == 'admin' && password == 'admin') {
                resolve('isLoggedIn');
            } else {
                // throw new Error('Incorrect username or password');
                reject('Incorrect username or password')
            }
        }, 2000);

    })
}