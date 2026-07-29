function Footer() {

    let date = new Date().getUTCFullYear();

    return(
        <footer>
         <p>&copy; {date} My React Website</p>
        </footer>
    );   
}

export default Footer