
import Product from "./Product";

const ProductFeed = ({results}) => {
    

 return (
     <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
         {results.slice(0,4).map(({id, title, price, description, category, image}) => {
             return (
                 <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image}/>
             )
         })}
    <img className="md:col-span-full" src="https://links.papareact.com/dyz"/>
    <div className="md:col-span-2">
    {results.slice(4,5).map(({id, title, price, description, category, image}) => {
             return (
                 <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image}/>
             )
         })}
    </div>

    {results.slice(0,results.length).map(({id, title, price, description, category, image}) => {
             return (
                 <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image}/>
             )
         })}
     </div>
 )
}

export default ProductFeed;