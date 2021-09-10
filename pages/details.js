import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const comentarios = [
  "este es el primer comentario",
  "este es el segundo comentario",
  "este es el tercer comentario"
];
const reactions = 5;

export default function Details() {
  return (
    <div className="flex flex-col items-center container ">
        <img className = {`${styles.imageCover} mt-5`} src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg" alt="" />
        
        <h1 className='text-7xl mt-5 mb-5'>
          Titulo del post;
        </h1>

        <p className={`${styles.description} mt-5 mb-5`}>
          este es el contenido del primer post que tenemos
        </p>
        <ul className="flex flex-col ">
          {
            comentarios.map(comentario=><li>{comentario}</li>)
          }
        </ul>
        <button className="rounded-full w-10 text-white bg-red-500">{reactions}</button>
    </div>
  )
}
