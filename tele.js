class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.phoneNumbers.delete(phoneNumber);
        } else {
            console.log(`Phone number ${phoneNumber} not found.`);
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this._notifyObservers(phoneNumber);
        } else {
            console.log(`Phone number ${phoneNumber} not found. Cannot dial.`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer); // More concise removal
        if (this.observers.length === 0) {
            console.log("Observer not found")
        }
    }

    _notifyObservers(phoneNumber) {
        for (const observer of this.observers) {
            observer.update(phoneNumber);
        }
    }
}

class PhoneNumberPrinter {
    update(phoneNumber) {
        console.log(`Phone number dialed: ${phoneNumber}`);
    }
}

class DialingMessagePrinter {
    update(phoneNumber) {
        console.log(`Now Dialing ${phoneNumber}`);
    }
}