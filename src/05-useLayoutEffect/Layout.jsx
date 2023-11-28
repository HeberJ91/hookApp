import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, QuoteLayout } from "../03-examples";


export const Layout = () => {

  const {counter, increment } = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter}` );

  const {author, quote} = !!data && data[0];

  return (
    <>
        <h1>Breaking Bad Quotes 2</h1>
        <hr/>
        {
            isLoading 
                ? ( 
                    <LoadingQuote/>
                )
                : (
                    <QuoteLayout author={ author} quote={ quote} />
                )
        }
    
    
        <button 
            className="btn btn-primary"
            onClick={() => increment() }
            disabled= { isLoading } >
            Next quote
        </button>



    </>

    )
}
