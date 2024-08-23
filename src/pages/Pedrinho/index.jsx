import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card.jsx'
import styles from '../../pages/Músicas/Musica.module.css'

function Pedrinho() {

    const [ songs, setSongs ] = useState([])

    useEffect(() => {
        const buscarMusicas = async () => {
            const response = await fetch('./APIMusicas.json')
            const data = await response.json()
            setSongs(data)
        }
        buscarMusicas()
    }, [])

    return (
        <>
            <h1 className={styles.h1}>MC PEDRINHO</h1>
        <section className={styles.musicas}>

            {
                songs.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            songs.filter(song => song.artista === "MC PEDRINHO").map((data) => (
                                <Card
                                    key={data.id}
                                    img={data.img}
                                    titulo={data.titulo}
                                    artista={data.artista}
                                    album={data.album}
                                    ano_lancamento={data.ano_lancamento}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p className={styles.load}>Carregando Músicas...</p>
                )
            }
        </section>
        </>
    )
}

export default Pedrinho