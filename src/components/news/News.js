import React from 'react'
import styles from "./news.module.scss"
import NewsItem from "./newsItem/NewsItem"

import news1 from "../../asset/news/news1.jpg"
import news2 from "../../asset/news/news2.jpg"
import news3 from "../../asset/news/news3.jpg"


const newsArr = [
    { id: 1, title: "Lamborghini Revuelto Debuts in the U.S.", date: "5 APRIL 2023", image: news1 },
    { id: 2, title: "The Lamborghini Revuelto Debuts in Sant’Agata", date: "30 MARCH 2023", image: news2 },
    { id: 3, title: "Lamborghini Revuelto: the first super sports V12 hybrid HPEV", date: "29 MARCH 2023", image: news3 }
]

export default function News() {
    return (
        <div className={styles.news}>
            <div className="container">
                <h2>NEWS</h2>
                <h4>LAMBORGHINI WORLD</h4>

                <div className={styles.newsItem}>
                    {
                        newsArr.map(item => <NewsItem key={item.id} data={item} />
                        )
                    }
                </div>

                <button className={styles.button}>SEE ALL</button>
            </div>
        </div>
    )
}
