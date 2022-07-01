class NotesStore {
    constructor(notes, states) {
        this.notes = [];
        this.states = ["completed", "active", "others"]
    }

    getNotes(state) {
        let inStateNotes = []
        
        if (this.states.includes(state) === false) {
            return ["Error: Invalid state " + state]
        }
        this.notes.forEach( note => {
            if (note.state === state) {
                inStateNotes.push(note.name)
            }
        })
        if (inStateNotes.length > 0) {
            return inStateNotes
        }
        return ["No Notes"]
    }

    addNote(state, name) {
        if (this.states.includes(state) === false) {
            return ["Error: Invalid state " + state]
        }
        else if (name === undefined) {
            return ["Error: Name cannot be empty"];
        }
        else {
            this.notes.push({ name: name, state: state})
            return this.getNotes(state)
        }
    }
}

let notes = new NotesStore
console.log(notes.addNote("active", "drink"));
console.log(notes.addNote("completed"))
console.log(notes.getNotes("others"));
notes.getNotes("foo")