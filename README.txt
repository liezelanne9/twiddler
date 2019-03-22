*App*

[ ] get all thoughts 
    [ ] save to state.thoughts
    [ ] pass as props to List
    [ ] when component did mount

[ ] enter username (state.UsernameExists = false)
    [ ] handleUsername (save to state.username)
        [ ] onClick, set state.UsernameExists = true
        &&
        [ ] new thought (input id="new-thought" placeholder=`Tell me what you're thinking ${this.username}...`
            [ ] handleNewThought
            [ ] handleSubmit 
                [ ] axios post ({ username, newThought })
                [ ] reset new-thought
                [ ] get all thoughts


[ ] change username (button)
    [ ] onClick, set state.username = '', state.UsernameExists = false


*List*
[ ] reverse order for loop props.thoughts => ListEntry

*ListEntry*
[ ] this.state{ like: false } // also a key in our database
[ ] edit tweet { where: { username }} // IF USERNAME SAME
[ ] delete tweet // IF USERNAME SAME

ADVANCED
[ ] display user's thoughts when username is clicked
[ ] enable commenting
[ ] enable reposting
