

export default function Product({title, idx, image}){
    let description =["For an always cool outlook",
        "Indian surely know the route to comfort",
        "Festive wear that your family love",
        "When style meet comfort"
      ]

    let styles=  {
        border: "none",
        borderRadius: "14px",
        marginBottom: "  15px",
        marginLeft: "10px",
        width: "200px",
         height: "300px", 
        Position:"cover",
        backgroundColor:"#F4B049",
        color:"white",
        textAlign: "center",
        // padding: "10px",
        boxSizing: "border-box"
    }
    let imageStyles = {
        width: "200px",
        height: "180px",
         objectFit: "cover",
        // borderRadius: "10px"
    };
    return(
<div style={styles}>
<img src={image} alt={`${title}image`} style={imageStyles} />
<h3>{title }</h3>
<p>{description[idx]}</p>
</div>


    )
}