import Cards from './Cards';

export default function Pizzas({ data }) {
    return (
        <div className='row'>
            {data.map((t) => (
                <Cards pizzas={t}/>
            ))}
        </div>
    )
}