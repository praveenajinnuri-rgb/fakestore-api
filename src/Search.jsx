import React, { useEffect, useState } from 'react'


function Search(){
    var [data,setData] = useState([])
    var [cart,setCart] = useState([])
    var [search,setSearch] = useState("")


    async function fetchData(){
        var result = await fetch('https://fakestoreapi.com/products')
        var myResult = await result.json()
        setData(myResult)
    }
    useEffect(()=>{
        fetchData()

    },[])

    function addToCart(product){
        setCart([...cart,product])
    }

    function deleteCart(myItem){
        var newCart = cart.filter(item =>item.id !==myItem.id)
        setCart([newCart])
    }

    function handlesetSearch(){
        var searchedItem = data.filter(item=>item.title === search)
        setData(searchedItem)

    }

    return(
        <div>
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" />
            <button onClick={handlesetSearch}>search</button>
            {
                data.map((item)=>{
                    return(
                        <div>
                            <h1>{item.title}</h1>
                            <button onClick={()=>addToCart(item)}>AddToCart</button>
                            <img  style={{height : "100px",width : "100px"}} src={item.image} alt="" />
                        </div>
                    )
                })
            }
            <div>
                {
                    cart.map((item)=>{
                        return(
                            <div>
                                <h1>{item.title}</h1>
                            <img  style={{height : "100px",width : "100px"}} src={item.image} alt="" />
                                <button onClick={()=>deleteCart(item)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Search