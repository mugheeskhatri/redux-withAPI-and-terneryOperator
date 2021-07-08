

const data = () => {
    return (dispatch) => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json => dispatch({ type: "data", name: json })
            )

    }
}

export {
    data
}