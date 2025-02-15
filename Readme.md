# Telephone Package (JavaScript)

This project implements a simple telephone package in JavaScript, demonstrating the observer pattern.  It allows you to add, remove, and dial phone numbers, and notifies registered observers whenever a number is dialed.

## Features

*   **Add Phone Number:**  Adds a phone number to the telephone's directory.  Uses a `Set` for efficient storage and prevents duplicate entries.
*   **Remove Phone Number:** Removes a phone number from the directory.  Provides a message if the number is not found.
*   **Dial Phone Number:** Dials a phone number.  Only numbers that have been added can be dialed.  Notifies all registered observers when a number is successfully dialed.
*   **Observer Pattern:** Implements the observer pattern, allowing you to register multiple observers that will be notified when a phone number is dialed.
*   **Add Observer:** Adds an observer to the list of observers.
*   **Remove Observer:** Removes an observer from the list of observers. Provides a message if the observer is not found.
*   **Phone Number Printing Observer:** A sample observer that prints the dialed phone number to the console.
*   **Dialing Message Printing Observer:** A sample observer that prints a "Now Dialing" message along with the phone number to the console.