import Product from "./Product"


export default  function ProductTab(){
   
    let styles ={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItem:"center",
     }

        
    return(
        <div style={styles}>
            
        <Product title="All  Indian Wear" idx={0}  image="../public/img1.png" />
        <Product title= "Ethnic Casuals" idx={1} image="../public/img2.png"  />
        <Product title= "Printed Kurta Sets"  idx={2}  image="../public/img3.png"/>
        <Product title= "Bold Black Kurtas"  idx={3} image="../public/img4.png" />
        <Product title= "Royal Red Choice"  idx={3} image="../public/img5.png" />
        <Product title= "Golden  Kurtas"  idx={3} image="../public/img6.png" />
      
        </div>
    )
}