# DayNotes - Date-based note taking platform

A MERN full-stack date-based note taking platform that uses web sockets for seamless synchronization between browser tabs. Through Socket.io, the client-side website communicates with the back-end server built with Node.js and Express.js to save notes made with the Quill.js text editor to a MongoDB database. Users log in securely through cookie-based authentication sent through the Next.js and Express.js routes.

Built with Node.js, Express.js, Socket.io, React, TypeScript, MongoDB, Quill.js, Date-fns, HTTP, BCrypt, TailwindCSS, and NextJS.
[Website](https://daynotes-client.vercel.app/)


## How does it work?

Once the user signs in through Auth0's user authorization, a MongoDB user collection is made which will store their basic profile data (private login data is securely stored through Auth0.) When they create their first note, the client-side Vercel-hosted website communicates with the Node.js server hosted on Render to establish a Socket.io web socket connection. This socket connection is what allows for real-time document synchronization between browser tabs.

Once the Socket.io connection is started, the Quill.js text editor is activated and a note document is created in the MongoDB database with important data like the users ID, the date of the document, and the notes text. The note is now ready for any changes, and is saved consistently every second, with Socket.io listening for any changes to be communicated.

At the top of the interface, there is a calendar view toggle which displays what dates the user has made a note. If a note was created but left empty or with only whitespace, Socket.io tells MongoDB to delete the document (to save space.) If the user wants to delete the note for that date, they can at the top right.

Finally, the user can navigate to the Notes page to see their collection of notes laid out in grid form, enabling them to sort through by date or when they were last updated, and they can even search by keyword or date. Thanks for checking out my project DayNotes! This is merely just a personal project for development practice, not intended as a real product.
