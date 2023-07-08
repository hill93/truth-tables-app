const ErrorList = ({errors}) => {
    return errors?.map(error => 
        <p>{error}</p>
    )
}

export default ErrorList;