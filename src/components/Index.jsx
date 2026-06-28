import '../App.css'
import App from "../App";
import tiger from "../assets/images/tiger.jpg"
import elephant from "../assets/images/elephant.jpg"
import zebra from "../assets/images/zebra.jpg"
import jaguar from "../assets/images/jaguar.jpg"
import lion from "../assets/images/lion.jpg"
import giraffe from "../assets/images/giraffe.jpg"
import rhino from "../assets/images/rhino.jpg"
import hippo from "../assets/images/hippopotamus.jpg"
import camel from "../assets/images/camel.jpg"
import gorilla from "../assets/images/Gorilla.jpg"
import honeybadger from "../assets/images/honeybadger.jpg"
import deer from "../assets/images/deer.jpg"
import buffalo from "../assets/images/buffalo.jpg"
import leopard from "../assets/images/leopard.jpg"
import bear from "../assets/images/bear.jpg"

function Index(){

     const gallery = [
            {
                image:tiger,
                title:'Tiger'
            },
            {
                image:jaguar,
                title:'Jaguar'
            },
            {
                image:zebra,
                title:'Zebra'
            },
            {
                image:deer,
                title:'Deer'
            },
            {
                image:elephant,
                title:'Elephant'
            },
            {
                image:giraffe,
                title:'Giraffe'
            },
            {
                image:rhino,
                title:'Rhino'
            },
            {
                image:gorilla,
                title:'Gorilla'
            },
            {
                image:leopard,
                title:'Leopard'
            },
            {
                image:buffalo,
                title:'Buffalo'
            },
            {
                image:honeybadger,
                title:'Honey Badger'
            },
            {
                image:lion,
                title:'Lion'
            },
            {
                image:bear,
                title:"Bear"
            },
            {
                image:hippo,
                title:"Hippopotamus"
            },
            {
                image:camel,
                title:"Camel"
            }
            ]

    return (

<>
<div className="gallery">
<div className="title">
<h1>Animals Image Gallery</h1>
</div>
<div className="types">
{gallery.map((item,index) => (
<App key={index} image={item.image}title={item.title}/>
))}
</div>
</div>
</>
);
}
export default Index;
