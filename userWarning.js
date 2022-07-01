class User {
   constructor(userName) {
       this.userName = userName;
   }

   getUsername() {
       return this.userName;
   }

   setUsername(username) {
       return this.userName = username;
   }
}

class ChatUser extends User {
    constructor(userName, warning) {
        super()
        userName = this.setUsername(userName);
        this.warning = 0
    }

    giveWarning(){
        warning += 1;
    }

    getWarningCount() {
        return this.warning
    }
}