class BDWorker {
    static duplicateCheck(email, bd) {
        return new Promise( resolve => {
            bd.persons.forEach(item => {
                if(item.email === email) {
                    resolve(true);
                }
            })

            resolve(false);
        })
    }

    static loggedInUser(email, pass, bd) {
        return new Promise( resolve => {
            bd.persons.forEach(item => {
                if(item.email === email && item.pass === pass) {
                    const result = {status: true, user: item};
                    resolve(result);
                }
            })

            resolve(false);
        })
    }

    static setDate() {
        const date = new Date();
        const D = date.getDate() > 10 ? date.getDate() + '' : '0' + date.getDate();
        const M = date.getMonth() > 10 ? date.getMonth() + '' : '0' + date.getMonth();
        const Y = date.getFullYear();
        const fullDate = `${D}.${M}.${Y}`;
        return fullDate;
    } 
}

module.exports = BDWorker; 