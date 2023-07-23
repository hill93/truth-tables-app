const ErrorList = ({errors}) => {
    return (
        <div>
            The following input(s) could not be parsed, please fix the following letters in red:
            {errors?.map((error, i) => 
                <div key={i}>
                    {[...error.input].map((x, j)=> <span key={j} style={{'color': j === error.column ? 'red' : 'white'}}>{x}</span>)}
                </div>
            )}
        </div>
    )
}

export default ErrorList;